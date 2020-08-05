import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useAuth } from '../components/AuthContext'
import Container from '../components/Container'
import { gql } from 'apollo-boost'
import {
  Paper, 
  Typography, 
  Button
} from '@material-ui/core'
import Router from 'next/router'
import ProfileView from '../components/ProfileView'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'
import Link from 'next/link'
import IAccountProfileFields from '../server/src/models/accounts/AccountProfile'

const GET_PROFILE_QUERY = gql`
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

function MyProfile({ profile } : { profile: IAccountProfileFields }) {
  const { currentUser } = useAuth()

  return (
    <MainLayout title={`${currentUser ? currentUser.fullName : 'My Profile'}`}>
      <Container>
        {currentUser &&
          <div style={{ marginTop: 15 }}>
            <Paper style={{ padding: 15 }}>
              <Typography variant="h5" color="secondary">{currentUser.fullName}</Typography>
              <Typography variant="h6" color="textSecondary">{currentUser.email}</Typography>
              <div style={{ color: '#808080', fontSize: '8pt', marginTop: 5 }}>
                If there is a mistake in your name or if you want to update your email, please contact an administrator
              </div>
            </Paper>

            {profile ?
              <div style={{ marginTop: 15 }}>
                <div style={{ display: 'flex', marginBottom: 15, paddingBottom: 10, borderBottom: '1px solid #DFDFDF' }}>
                  <Typography variant="h6" color="textSecondary" style={{ flexGrow: 1 }}>My Profile</Typography>

                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    onClick={() => Router.push('/editProfile')}
                  >
                    Edit
                  </Button>
                </div>
 
                <ProfileView profile={profile} />
              </div> :

              <div style={{ padding: 40, textAlign: 'center' }}>
                You do not have a profile yet. &nbsp;
                <Link href="/createProfile"><a style={{ textDecoration: 'none' }}>Create Profile</a></Link>
              </div>
            }
          </div>
        }
      </Container>
    </MainLayout>
  )
}

MyProfile.getInitialProps = async ({ apolloClient, token, currentUser }: any) => {
  var profile = null
  
  if (currentUser) {
    const { data: { account }} = await apolloClient.query({
      query: GET_PROFILE_QUERY,
      variables: { email: currentUser.email },
      context: { headers: { 'schoolman_token': token } }
    })

    profile = account.profile
  }

  return ({ profile, authRequired: true })
}

export default withApollo(withAuth(MyProfile))
