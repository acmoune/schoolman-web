import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { gql } from 'apollo-boost'
import IEnrollment from '../server/src/models/accounts/Enrollment'
import Container from '../components/Container'
import EnrollmentItem from '../components/EnrollmentItem'
import { Typography, Button } from '@material-ui/core'
import Enrollment from '../components/Enrollment'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'

const GET_MY_TRAININGS_QUERY = gql`
  query getMyTrainings($accountId: ID!) {
    enrollments(accountId: $accountId) {
      enrollmentId
      sessionTitle
      trainingTitle
      planTitle
      programTitle
      departmentTitle
      startDate
      duration
      sessionStatus
      bills {
        billId
        feeType
        description
        amount
        payments { paymentId amount date }
      }
    }
  }
`

function ListView({ enrollments, onSelect }: { enrollments: IEnrollment[], onSelect: (item: IEnrollment) => void }) {
  return (
    <div style={{ marginTop: 15 }}>
      <Typography variant="h5" color="textSecondary" style={{ marginBottom: 10 }}>My Training courses</Typography>

      {enrollments.map(e => <EnrollmentItem enrollment={e} onSelect={() => onSelect(e)} />)}
    </div>
  )
}

function ItemView({ enrollment, onBack }: { enrollment: IEnrollment, onBack: () => void }) {
  const totalBills = enrollment.bills.map(b => b.amount).reduce((s, i) => s + i, 0)
  const totalPayments = enrollment.bills.flatMap(b => b.payments.map(p => p.amount)).reduce((s, i) => s + i, 0)
  const isOwingMoney = totalPayments < totalBills

  return (
    <div>
      <div style={{ marginTop: 15, marginBottom: 10, display: 'flex', alignItems: 'center' }}>
        <div>
          <Button onClick={() => onBack()} size="small" variant="text">Back to list</Button>
        </div>
      </div>

      <Enrollment enrollment={enrollment} />
    </div>
  )
}

function MyTrainingsPage({ enrollments }: { enrollments: IEnrollment[] }) {
  const [selectedEnrollment, selectEnrollment] = useState<IEnrollment | null>(null)

  return (
    <MainLayout title="My Training courses">
      <Container>
        {selectedEnrollment ? 
          <ItemView enrollment={selectedEnrollment} onBack={() => selectEnrollment(null)} /> : 
          <ListView enrollments={enrollments} onSelect={(item: IEnrollment) => selectEnrollment(item)} />
        }
      </Container>
    </MainLayout>
  )
}

MyTrainingsPage.getInitialProps = async ({ apolloClient, token, currentUser }: any) => {
  const { data: { enrollments }} = await apolloClient.query({
    query: GET_MY_TRAININGS_QUERY,
    variables: { accountId: currentUser.id },
    context: { headers: { 'schoolman_token': token } }
  })

  return ({ enrollments, authRequired: true })
}

export default withApollo(withAuth(MyTrainingsPage))
