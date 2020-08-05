import * as React from 'react'
import { gql } from 'apollo-boost'
import Container from '../components/Container'
import MainLayout from '../layouts/MainLayout'
import Link from 'next/link'
import DepList from '../components/catalog/DepList'
import { Typography } from '@material-ui/core'
import {
  Grid,
  Hidden,
  Paper
} from '@material-ui/core'
import ProgramSummaryContent from '../components/catalog/ProgramSummaryContent'
import TrainingSummary from '../components/catalog/TrainingSummary'
import IDepartment from '../server/src/models/catalog/Department'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'


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

function ProgramPage({ programId, departments }: { programId: number, departments: IDepartment[] }) {
  const filtered = departments.flatMap(d => d.programs).filter(p => p.id == programId)
  const program = filtered.length > 0 ? filtered[0] : null

  if (!program) return <div>Program not found</div>

  return (
    <MainLayout title={`${program.title}`}>
      <Container>
        <Grid container spacing={1}>
          <Hidden smDown>
            <Grid item sm={3}>
              <DepList deps={departments} selectedProgramId={programId} />
            </Grid>
          </Hidden>
          
          <Grid item xs={12} md={9}>
            <div style={{ marginTop: 15 }}>
              <Paper style={{ padding: 15 }}>
                <ProgramSummaryContent program={program} displayLink />
              </Paper>

              <Typography variant="h5" color="primary" style={{textAlign: 'center', margin: '15px 0px'}}>Available training courses</Typography>

              <Grid container spacing={2}>
                {program.trainings.map((t: any) =>
                  <Grid item sm={6}>
                    <Link href={{ pathname: '/training', query: { trainingId: t.id } }}>
                      <a style={{ textDecoration: 'none' }}>
                        <TrainingSummary training={t} />
                      </a>
                    </Link>
                  </Grid>
                )}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}

ProgramPage.getInitialProps = async ({ query, apolloClient, token }: any) => {
  const { data: { departments }} = await apolloClient.query({
    query: GET_DEPARTMENTS_QUERY,
    context: { headers: { 'schoolman_token': token } }
  })

  return ({ departments, programId: query.programId, authRequired: false })
}

export default withApollo(withAuth(ProgramPage))
