import React from 'react'
import { AuthProvider } from '../components/AuthContext'
import jwtDecode from 'jwt-decode'
import { gql } from 'apollo-boost'
import axios from 'axios'
import { getCookieFromBrowser, getCookieFromServer, removeCookie } from '../lib/cookie'
import { authCookieName, apiBaseUrl } from '../app.config'
import Router from 'next/router'

const GET_ACCOUNT_QUERY = gql`
  query getProfile($email: String!) {
    account(email: $email) {
      id
      email
      fullName
      profile {
        id birthDate birthPlace residence phoneNumber nationality otherDetails
      }
    }
  }
`

export default function withAuth(PageComponent) {

  const getToken = req => 
    typeof window === 'undefined' ? getCookieFromServer(authCookieName, req) : getCookieFromBrowser(authCookieName)

  function WithAuth({ currentUser, ...pageProps }) {
    return (
      <AuthProvider currentUser={currentUser}>
        <PageComponent {...pageProps} />
      </AuthProvider>
    )
  }

  WithAuth.getInitialProps = async ctx => {
    const token = getToken(ctx.req)
    let currentUser = undefined
    let tokenIsValid = false

    if (token) {
      try {
        await axios.post(`${apiBaseUrl}/validateToken`, { token }, { headers: { 'Content-Type': 'application/json' } })
        tokenIsValid = true
      } catch (ex) {}

      if (tokenIsValid) {
        const { data: { account }} = await ctx.apolloClient.query({
          query: GET_ACCOUNT_QUERY,
          variables: { email: jwtDecode(token).ema },
          context: { headers: { 'schoolman_token': token } }
        })
        currentUser = account
      }
    }

    // add token and currentUser to context, so they can be used in PageComponent.getInitialProps
    ctx.token = token
    ctx.currentUser = currentUser

    let pageProps = {}
    if (PageComponent.getInitialProps) pageProps = await PageComponent.getInitialProps(ctx)

    const { authRequired } = pageProps

    if (authRequired && !currentUser) {
      if (typeof window === 'undefined') ctx.res.redirect('/signIn')
      else Router.push('/signIn')
    }

    if (!tokenIsValid && (typeof window !== 'undefined')) removeCookie(authCookieName)

    return { currentUser, ...pageProps }
  }

  return WithAuth
}
