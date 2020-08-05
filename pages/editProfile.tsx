import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import ProfileForm from '../components/ProfileForm'
import { useAuth } from '../components/AuthContext'
import Container from '../components/Container'
import { Typography, Button } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Router from 'next/router'
import Alert, { AlertOptions } from '../components/Alert'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'

const UPDATE_PROFILE_MUTATION = gql`
  mutation updateProfile($accountId: ID!, $profileId: ID!, $data: ProfileDataInput!) {
    updateProfile(accountId: $accountId, profileId: $profileId, data: $data) {
      id birthDate birthPlace residence phoneNumber nationality
      nicNumber nicDateOfIssue nicPlaceOfIssue
      highestAcademicQualification yearOfIssue englishGradeInGCEOL mathematicsGradeInGCEOL
      professionalQualification employmentStatus jobTitle yearsOfExperience employerName employerAddress
      otherDetails
    }
  }
`

function EditProfile() {
  const { currentUser } = useAuth()
  const [updateProfile, _] = useMutation(UPDATE_PROFILE_MUTATION)
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({ open: false, level: 'info', message: '' })

  
  return (
    <MainLayout title="Edit Profile">
      {currentUser &&
        <div>
          <Container>
            <div style={{ display: 'flex',marginTop: 15, marginBottom: 15, paddingBottom: 10, borderBottom: '1px solid #DFDFDF' }}>
              <Typography variant="h6" color="textSecondary" style={{ flexGrow: 1 }}>Edit Profile</Typography>

              <Button 
                variant="contained" 
                color="secondary" 
                size="small" 
                onClick={() => Router.push('/myProfile')}
              >
                Cancel
              </Button>
            </div>
          </Container>

          <Container maxWidth={600}>
            <div style={{ marginTop: 15 }}>
              <ProfileForm 
                profile={currentUser.profile}
                onSubmit={(data) => {
                  updateProfile({
                    variables: { 
                      accountId: currentUser.id, 
                      profileId: currentUser.profile.id,
                      data
                    }
                  })
                    .then(() => Router.push('/myProfile'))
                    .catch(err => setAlertOptions({ open: true, level: 'error', message: err.message }))
                }}
              />

              <Alert 
                level={alertOptions.level}
                message={alertOptions.message}
                open={alertOptions.open}
                onClose={() => setAlertOptions({ open: false, level: alertOptions.level, message: alertOptions.message })}
              />
            </div>
          </Container>
        </div>
      }
    </MainLayout>
  )
}

EditProfile.getInitialProps = () => ({ authRequired: true })

export default withApollo(withAuth(EditProfile))
