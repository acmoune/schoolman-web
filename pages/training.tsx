import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { gql } from 'apollo-boost'
import { apiServer } from '../app.config'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'
import s3 from '../lib/s3'
import { currency } from '../lib/utilities'

import {
  Paper,
  Typography,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button
} from '@material-ui/core'
import Container from '../components/Container'
import MainLayout from '../layouts/MainLayout'
import ITraining from '../server/src/models/catalog/Training'
import ITrainingUnit from '../server/src/models/catalog/TrainingUnit'
import ITrainingPlan from '../server/src/models/catalog/TrainingPlan'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

function Units(props: { units: ITrainingUnit[] }) {
  const classes = makeStyles((theme: Theme) => createStyles({
    root: { marginTop: 20 },
    heading: {
      flexGrow: 1
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    }
  }))()

  const [currPanelId, setCurrPanelId] = React.useState<number>(-1)
  const handleChange = (id: number) => (event: React.ChangeEvent<{}>) => {
    if (id === currPanelId) setCurrPanelId(-1)
    else setCurrPanelId(id)
  }
  
  return (
    <div className={classes.root}>
      <div style={{ marginBottom: 10 }}>
        <Typography variant="subtitle2" color="primary">Units</Typography>
      </div>

      {props.units.length > 0 ? 
        props.units.map(u =>
          <ExpansionPanel expanded={currPanelId === u.id} onChange={handleChange(u.id)} key={u.id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${u.id}`} id={`panel${u.id}`}>
              <Typography className={classes.heading} variant="inherit" style={{ color: '#CC9B05' }}>{u.title}</Typography>
              <Typography className={classes.secondaryHeading}>{u.optional ? 'Optional' : 'Required'}</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <div style={{ flexGrow: 1 }}>
                <div dangerouslySetInnerHTML={{ __html: u.syllabus }} />
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ) :
        <span>No Units</span>
      }
    </div>
  )
}

function Plan(props: { plan: ITrainingPlan }) {
  const router = useRouter()

  return (
    <div>
      <div style={{ paddingLeft: 15 }}>
        <div><Typography variant="h5">{props.plan.title}</Typography></div>
        <div>
          <Typography variant="caption" style={{ color: '#808080' }}>{props.plan.description}</Typography>
        </div>

        <div style={{ marginTop: 10 }}>
          <Table size="small" style={{ border: '1px solid #DFDFDF' }}>
            <TableBody>
              <TableRow key="duration">
                <TableCell component="th" scope="row" style={{ color: '#808080' }}>Duration</TableCell>
                <TableCell align="right">{props.plan.duration}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div style={{color: '#808080', marginTop: 15, fontSize: '11pt' }}>Fees</div>

        {props.plan.fees.length > 0 ?
          <div style={{ marginTop: 10 }}>
            <Table size="small" style={{ border: '1px solid #DFDFDF' }}>
              <TableHead style={{ backgroundColor: '#DFDFDF' }}>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {props.plan.fees.map(f => (
                  <TableRow key={f.id}>
                    <TableCell>{f.description} {f.optional && <span style={{color: '#808080'}}>(Optional)</span>}</TableCell>
                    <TableCell>{f.feeType}</TableCell>
                    <TableCell align="right">
                      {f.promotionalAmount > 0 ?
                        <div>
                          <span style={{textDecoration: 'line-through'}}>{currency(f.amount)}</span> &nbsp;
                          <span style={{color: 'orange'}}>{currency(f.promotionalAmount)}</span>
                        </div> :
                        <span>{currency(f.amount)}</span>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div> :
          <span>No fees</span>
        }

        <div style={{color: '#808080', marginTop: 15, fontSize: '11pt'}}>Current Sessions</div>

        {props.plan.currentSessions.length > 0 ?
          <div style={{ marginTop: 10 }}>
            <Table size="small" style={{ border: '1px solid #DFDFDF' }}>
              <TableHead style={{ backgroundColor: '#DFDFDF' }}>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell  align="right">Start date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>

              <TableBody>
                {props.plan.currentSessions.map(s => (
                  <TableRow key={s.id}>
                    <TableCell>{s.title}</TableCell>
                    <TableCell align="right">{s.startDate}</TableCell>
                    <TableCell>{s.status}</TableCell>
                    <TableCell align="right">
                      <Link href={{ pathname: '/application', query: { tsId: s.id } }}>
                        <a>Apply</a>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div> :
          <span>There is no new session right now, we should schedule one shortly, please check again later</span>
        }
      </div>
    </div>
  )
}

function Plans(props: { plans: ITrainingPlan[] }) {
  const classes = makeStyles((theme: Theme) => createStyles({
    root: { marginTop: 20 },
    planItem: {
      fontSize: '11pt',
      color: '#808080',
      cursor: 'pointer',
      padding: 5,
      borderRadius: 3
    },
    selectedPlanItem: {backgroundColor: '#FABD03', color: '#000000'}
  }))()

  const [currentPlanId, setCurrentPlanId] = React.useState<number>(props.plans.length > 0 ? 0 : -1)
  const handleClick = (id: number) => (event: React.ChangeEvent<{}>) =>
    setCurrentPlanId(id)

  return (
    <div className={classes.root}>
      <div style={{ marginBottom: 10 }}>
        <Typography variant="subtitle2" color="primary">Plans</Typography>
      </div>
      
      <Paper style={{ padding: 15 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            {props.plans.map((p, i) => (
              <div
                key={p.id}
                className={`${classes.planItem} ${i === currentPlanId ? classes.selectedPlanItem : ''}`}
                onClick={handleClick(i)}
                style={{position: 'relative', paddingRight: 22}}
              >
                {p.title}
                
                {p.currentSessions.length > 0  && (
                  <span style={{fontSize: '8pt', width: 16, height: 16, textAlign: 'center', borderRadius: '50%', backgroundColor: '#444444', color: 'white', position: 'absolute', right: 5, top: 7, display: 'inline-block'}}>
                    {p.currentSessions.length}
                  </span>
                )}
              </div>
            ))}
          </Grid>

          <Grid item xs={12} md={8}>
            {(currentPlanId !== -1) ? 
              <Plan plan={props.plans[currentPlanId]} /> : 
              <span>No plan selected</span>
            }
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

const GET_ONE_TRAINING_QUERY = gql`
  query getTrainingById($trainingId: ID!) {
    training(trainingId: $trainingId) {
      id
      title
      description
      banner
      link
      requiredOptionalUnits
      prerequisites
      qualifications
      units { id title syllabus optional }
      plans {
        id
        title
        description
        duration
        fees { id description feeType amount promotionalAmount optional }
        currentSessions {
          id
          title
          startDate
          status
          fees { id description feeType amount promotionalAmount optional }
        }
      }
      program {id title logo }
    }
  }
`

function TrainingPage(props: { training: ITraining }) {

  const t: ITraining = props.training
  const banner = t.banner ? s3.getFileUrl(t.banner) : `${apiServer}/assets/images/trainings/no-banner.jpg`

  return (
    <MainLayout title={`${props.training.title}`}>
      <Container>
        <img src={banner} alt="" style={{width: '100%', marginTop: 0}} />

        <Paper style={{ padding: 15, marginTop: 5 }}>
          <div><Typography variant="h5">{t.title}</Typography></div>
          <div>
            <Typography variant="caption" style={{ color: '#808080' }}>{t.description}</Typography>
          </div>

          <div>
            {t.link ? 
              <div>
                <a href={t.link} style={{textDecoration: 'none', fontSize: '8pt', color: '#339967'}}>
                  Official  vendor link
                </a>
              </div> : 
              null
            }
          </div>

          <div style={{ marginTop: 15 }}>
            <Table size="small" style={{ border: '1px solid #DFDFDF' }}>
              <TableBody>
                <TableRow key={t.prerequisites}>
                  <TableCell component="th" scope="row" style={{ color: '#808080' }}>Program</TableCell>
                  <TableCell align="right">
                    <Link href={{ pathname: "/program", query: {programId: t.program.id} }}><a>{t.program.title}</a></Link>
                  </TableCell>
                </TableRow>

                {t.prerequisites && (
                  <TableRow key={t.prerequisites}>
                    <TableCell component="th" scope="row" style={{ color: '#808080' }}>Prerequisites</TableCell>
                    <TableCell align="right">{t.prerequisites}</TableCell>
                  </TableRow>
                )}

                {t.qualifications && (
                  <TableRow key={t.qualifications}>
                    <TableCell component="th" scope="row" style={{ color: '#808080' }}>Qualifications</TableCell>
                    <TableCell align="right">{t.qualifications}</TableCell>
                  </TableRow>
                )}

                <TableRow key="reqNum">
                  <TableCell component="th" scope="row" style={{ color: '#808080' }}>Required number of optional units</TableCell>
                  <TableCell align="right">{t.requiredOptionalUnits || 0}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Paper>

        <Plans plans={t.plans} />
        <Units units={t.units} />
      </Container>
    </MainLayout>
  )
}

TrainingPage.getInitialProps = async ({ query, apolloClient, token }: any) => {
  const { data: { training }} = await apolloClient.query({
    query: GET_ONE_TRAINING_QUERY,
    variables: { trainingId: parseInt(query.trainingId, 10) },
    context: { headers: { 'schoolman_token': token } }
  })

  return ({ training, authRequired: false })
}

export default withApollo(withAuth(TrainingPage))
