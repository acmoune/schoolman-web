import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import ProfileForm from '../components/ProfileForm'
import { useAuth } from '../components/AuthContext'
import Container from '../components/Container'
import { Typography } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Alert, { AlertOptions } from '../components/Alert'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'
import { baseUrl } from '../app.config'

const CREATE_PROFILE_MUTATION = gql`
  mutation createProfile($accountId: ID!, $data: ProfileDataInput!) {
    createProfile(accountId: $accountId, data: $data) {
      id birthDate birthPlace residence phoneNumber nationality
      nicNumber nicDateOfIssue nicPlaceOfIssue
      highestAcademicQualification yearOfIssue englishGradeInGCEOL mathematicsGradeInGCEOL
      professionalQualification employmentStatus jobTitle yearsOfExperience employerName employerAddress
      otherDetails
    }
  }
`

function CreateProfile() {
  const { currentUser } = useAuth()
  const [createProfile, _] = useMutation(CREATE_PROFILE_MUTATION)
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({ open: false, level: 'info', message: '' })


  return (
    <MainLayout title="Create Profile">
      {currentUser &&
        <Container maxWidth={600}>
          <div style={{ marginTop: 15 }}>
            <Typography variant="h5" color="textSecondary" style={{ textAlign: 'center', paddingBottom: 15}}>
              Create Profile
            </Typography>

            <ProfileForm 
              onSubmit={(data) => {
                createProfile({
                  variables: { 
                    accountId: currentUser.id,
                    data
                  }
                })
                  .then(() => window.location.href = baseUrl + '/myProfile')
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
      }
    </MainLayout>
  )
}

CreateProfile.getInitialProps = () => ({ authRequired: true })

export default withApollo(withAuth(CreateProfile))
