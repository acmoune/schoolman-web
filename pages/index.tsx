import * as React from 'react'
import Container from '../components/Container'
import MainLayout from '../layouts/MainLayout'
import DepartmentList from '../components/catalog/DepartmentList'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'
import { gql } from 'apollo-boost'
import IDepartment from '../server/src/models/catalog/Department'
import { Typography } from '@material-ui/core'

const GET_DEPARTMENTS_QUERY = gql`
  query getDepartments {
    departments {
      id
      title
      programs {
        id 
        title 
        description 
        logo 
        link 
        trainings { id title description banner link }
      }
    }
  }
`

function IndexPage({ departments }: { departments: IDepartment[] }) {
  return (
    <MainLayout title="SchoolMan - Your light Opensource School Manager">
      <img src="/images/banner.jpg" alt="" style={{width: '100%'}} />

      <Container>
        <Typography variant="h4" color="primary" style={{ textAlign: 'center', marginTop: 30 }}>All Training Programs</Typography>

        <DepartmentList departments={departments} />
      </Container>
    </MainLayout>
  )
}

IndexPage.getInitialProps = async ({ apolloClient, token }: any) => {
  const { data: { departments }} = await apolloClient.query({
    query: GET_DEPARTMENTS_QUERY,
    context: { headers: { 'schoolman_token': token } }
  })

  return ({ departments, authRequired: false })
}

export default withApollo(withAuth(IndexPage))
