import React from 'react'
import Container from '../components/Container'
import MainLayout from '../layouts/MainLayout'
import Router from 'next/router'
import ApplicationStepper from '../components/ApplicationStepper'
import { gql } from 'apollo-boost'
import ITrainingSession from '../server/src/models/catalog/TrainingSession'
import IAccountProfileFields from '../server/src/models/accounts/AccountProfile'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'

const GET_SESSION_QUERY = gql`
  query getTrainingSession($trainingSessionId: ID!) {
    trainingSession(trainingSessionId: $trainingSessionId) {
      id
      title
      startDate
      status
      fees {id description amount feeType optional}
      plan {
        id
        title
        duration
        training {
          id
          title
          program {
            id
            title
            department { id title }
          }
        }
      }
    }
  }
`

function ApplicationPage({ profile, tSession }: { profile: IAccountProfileFields, tSession: ITrainingSession }) {
  const handleCancel = () => Router.push({ pathname: '/training', query: { trainingId: tSession.plan.training.id }})
  
  return (
    <MainLayout title={`Applying for ${tSession.plan.training.title} (${tSession.plan.title})`}>
      <Container>
        <br />
        <ApplicationStepper 
          handleCancel={handleCancel}
          trainingTitle={tSession.plan.training.title}
          programTitle={tSession.plan.training.program.title}
          departmentTitle={tSession.plan.training.program.department.title}
          planTitle={tSession.plan.title}
          planDuration={tSession.plan.duration}
          session={tSession}
          profile={profile}
        />
      </Container>
    </MainLayout>
  )
}

const GET_PROFILE_QUERY = gql`
  query getProfile($email: String!) {
    account(email: $email) {
      id
      email
      fullName
      profile {
        id birthDate birthPlace residence phoneNumber nationality
        nicNumber nicDateOfIssue nicPlaceOfIssue
        highestAcademicQualification yearOfIssue englishGradeInGCEOL mathematicsGradeInGCEOL
        professionalQualification employmentStatus jobTitle yearsOfExperience employerName employerAddress
        otherDetails
      }
    }
  }
`

ApplicationPage.getInitialProps = async ({ query, apolloClient, token, currentUser }: any) => {
  var profile = null
  
  if (currentUser) {
    const { data: { account }} = await apolloClient.query({
      query: GET_PROFILE_QUERY,
      variables: { email: currentUser.email },
      context: { headers: { 'schoolman_token': token } }
    })

    profile = account.profile
  }

  const { data: { trainingSession }} = await apolloClient.query({
    query: GET_SESSION_QUERY,
    variables: { trainingSessionId: query.tsId },
    context: { headers: { 'schoolman_token': token } }
  })

  return ({ profile, tSession: trainingSession, authReuired: true })
}

export default withApollo(withAuth(ApplicationPage))
