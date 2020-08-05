import React from 'react'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { setContext } from 'apollo-link-context'
import { ApolloProvider } from '@apollo/react-hooks'
import { baseUrl, authCookieName } from '../app.config'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { getCookieFromBrowser } from '../lib/cookie'
import { typeDefs, resolvers } from '../lib/graphql/clientSchema'

let apolloClient = null

function createApolloClient(initialState = {}) {
  const httpLink = new HttpLink({
    uri: `${baseUrl}/graphql`,
    credentials: 'same-origin',
    fetch,
    
  })

  const authLink = setContext((_, prevCtxt) => {
    let headers = prevCtxt.headers || {}
    
    if (!headers['schoolman_token']) {
      const token = getCookieFromBrowser(authCookieName)
      headers = { ...headers, 'schoolman_token': token || '' }
    }
    
    return ({ headers })
  })

  const cache = new InMemoryCache().restore(initialState)

  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache,
    link: authLink.concat(httpLink),
    typeDefs,
    resolvers,
    connectToDevTools: true
  })

  const data = { // initial LocalState
    applier: {
      __typename: 'Applier',
      name: '',
      email: ''
    },

    applicationProfile: {
      __typename: 'ProfileData',
      birthDate: null,
      birthPlace: '',
      residence: '',
      phoneNumber: '',
      nationality: '',
      nicNumber: '',
      nicDateOfIssue: null,
      nicPlaceOfIssue: '',
      highestAcademicQualification: '',
      yearOfIssue: new Date().getFullYear(),
      englishGradeInGCEOL: '',
      mathematicsGradeInGCEOL: '',
      professionalQualification: '',
      employmentStatus: 'JobSeeker',
      jobTitle: '',
      yearsOfExperience: 0,
      employerName: '',
      employerAddress: '',
      otherDetails: null
    }
  } 

  cache.writeData({ data })
  client.onResetStore(() => cache.writeData({ data }))

  return client
}

function initApolloClient(initialState) {
  if (typeof window === 'undefined') return createApolloClient(initialState)
  if (!apolloClient) apolloClient = createApolloClient(initialState)
  return apolloClient
}

export default function withApollo(PageComponent, { ssr = true } = {}) {

  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState)
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = initApolloClient()
      ctx.apolloClient = apolloClient

      let pageProps = {}
      if (PageComponent.getInitialProps) pageProps = await PageComponent.getInitialProps(ctx)

      // Only on the server
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished. No point in continuing to render
        if (ctx.res && ctx.res.finished) return pageProps
        
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr')
            const { AppTree } = ctx
            await getDataFromTree(<AppTree pageProps={{ ...pageProps, apolloClient }} />)
          } catch (error) {
            console.error('Error while running `getDataFromTree`', error)
          }

          // getDataFromTree does not call componentWillUnmount head side effect therefore need to be cleared manually
          Head.rewind()
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract()

      return {
        ...pageProps,
        apolloState,
      }
    }
  }

  return WithApollo
}
