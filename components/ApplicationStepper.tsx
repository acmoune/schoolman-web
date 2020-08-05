import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { 
  Stepper, 
  Step, 
  StepLabel, 
  Button, 
  Paper, 
  Hidden, 
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress
} from '@material-ui/core'
import ITrainingSession from '../server/src/models/catalog/TrainingSession'
import IAccountProfileFields from '../server/src/models/accounts/AccountProfile'
import Container from './Container'
import { useAuth } from '../components/AuthContext'
import ProfileForm from '../components/ProfileForm'
import ProfileView from './ProfileView'
import Link from 'next/link'
import { IProfileData } from '../server/src/models/accounts/AccountProfile'
import { gql } from 'apollo-boost'
import { useApolloClient } from '@apollo/react-hooks'
import ApplierForm from './ApplierForm'
import Alert, { AlertOptions } from '../components/Alert'
import sendMail from '../lib/send-mail'
import { currency } from '../lib/utilities'
import { applicationReceiver } from '../app.config'

export type StepItem = 'ConfirmAccount' 
  | 'FillApplicationForm' 
  | 'ReviewProfileData' 
  | 'ReviewTrainingSession' 
  | 'ApplicationConfirmation'


const GET_APPLICATION_PROFILE_QUERY = gql`
  query getApplicationProfile {
    applicationProfile @client {
      birthDate
      birthPlace
      residence
      phoneNumber
      nationality
      otherDetails
    }
  }
`

const GET_APPLIER_QUERY = gql`
  query getApplier {
    applier @client {
      name
      email
    }
  }
`

const resetApplicationData = (client: any) => {
  client.writeQuery({
    query: GET_APPLIER_QUERY,
    data: { applier: { __typename: 'Applier', name: '', email: '' } }
  })

  client.writeQuery({
    query: GET_APPLICATION_PROFILE_QUERY,
    data: {
      applicationProfile: {
        __typename: 'ProfileData',
        birthDate: null,
        birthPlace: '',
        residence: '',
        phoneNumber: '',
        nationality: '',
        otherDetails: null
      }
    }
  })
}

export default function ApplicationStepper(
  props: { 
    handleCancel: Function,
    trainingTitle: string,
    departmentTitle: string,
    programTitle: string,
    planTitle: string,
    planDuration: string,
    session: ITrainingSession,
    profile: IAccountProfileFields
  }
) {
  const classes = makeStyles((theme: Theme) => createStyles({
    root: { width: '100%' },
    btnBar: {
      display: 'flex',
      padding: '10px 0px',
      borderTop: '1px solid #DFDFDF'
    },
    btnLeft: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    btnRight: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }))()

  const [alertOptions, setAlertOptions] = useState<AlertOptions>({ open: false, level: 'info', message: '' })
  const [sending, setSending] = useState<boolean>(false)
  const { currentUser } = useAuth()
  const client = useApolloClient()
  const { applicationProfile }: any = client.readQuery({ query: GET_APPLICATION_PROFILE_QUERY })
  const { applier }: any = client.readQuery({ query: GET_APPLIER_QUERY })
  const steps = getSteps(!!currentUser)
  const [step, setStep] = useState<StepItem>('ConfirmAccount')
  const activeStep = step === 'ApplicationConfirmation' ? 
    (currentUser ? 3 : 4) : 
    steps.filter(s => s.step === step)[0].id


  const idBody = (data: { name: string, email: string }) => {
    return `
      <div>
        <p>Dear ${data.name}, your application is being processed; you will have a response as soon as possible. See details below:</p>

        <h3>Name and Email</h3>
        <p><strong>Name</strong><br/>${data.name}</p>
        <p><strong>Email</strong><br/>${data.email}</p>
        <br />
        <br />
      </div>
    `
  }

  const sessionBody = () => {
    return `
      <div>
        <h3>Session details</h3>
        <p><strong>Department</strong><br/>${props.departmentTitle}</p>
        <p><strong>Program</strong><br/>${props.programTitle}</p>
        <p><strong>Plan</strong><br/>${props.planTitle}</p>
        <p><strong>Training</strong><br/>${props.trainingTitle}</p>
        <p><strong>Session</strong><br/>${props.session.title}</p>
        <p><strong>Start date</strong><br/>${props.session.startDate && new Date(props.session.startDate).toLocaleDateString()}</p>
        <p><strong>Duration</strong><br/>${props.planDuration}</p>
        <br />
        <br />
      </div>
    `
  }

  const profileBody = (profile: IProfileData) => {
    return `
      <div>
        <h3>Profile details</h3>
        <p><strong>Birthdate</strong><br/>${new Date(profile.birthDate).toLocaleDateString()}</p>
        <p><strong>Birth place</strong><br/>${profile.birthPlace}</p>
        <p><strong>Residence</strong><br/>${profile.residence}</p>
        <p><strong>Phone number</strong><br/>${profile.phoneNumber}</p>
        <p><strong>Nationality</strong><br/>${profile.nationality}</p>
        <p><strong>Other details</strong><br/>${profile.otherDetails || '(missing)'}</p>
        <br />
        <br />
      </div>
    `
  }

  const goToStep = (nextStep: StepItem) => setStep(nextStep)
  
  const handleBack = () => {
    switch (step) {
      case 'ConfirmAccount':
        return
      case 'FillApplicationForm':
        return goToStep('ConfirmAccount')

      case 'ReviewProfileData':
        if (currentUser) return goToStep('ConfirmAccount')
        else return goToStep('FillApplicationForm')

      case 'ReviewTrainingSession':
        return goToStep('ReviewProfileData')
    }
  }
  
  function getSteps(loggedIn: boolean) {
    const steps = []; let index = 0

    steps.push({ step: 'ConfirmAccount', caption: 'Confirm your account', id: index }); index += 1
    if (!loggedIn) {steps.push({ step: 'FillApplicationForm', caption: 'Fill application form', id: index }); index += 1 }
    steps.push({ step: 'ReviewProfileData', caption: 'Review your profile', id: index });  index += 1
    steps.push({ step: 'ReviewTrainingSession', caption: 'Review training session', id: index })

    return steps
  }

  function ConfirmAccountStep() {
    const classes = makeStyles((theme: Theme) => createStyles({
      root: {
        marginBottom: 40,
        paddingTop: 30,
        paddingBottom: 15,
        textAlign: 'center'
      },
      hasAccount: {},
      noAccount: {
        marginBottom: 30
      }
    }))()
  
    return (
      <Container maxWidth={500}>
        <div style={{padding: 10, textAlign: 'center'}}>
          <Typography variant="h5">Confirm your account</Typography>
        </div>
  
        <div className={classes.root}>
          {currentUser ?
            <div>
              <div>You are applying as</div>
              <div><Typography variant="h4" color="secondary">{currentUser.fullName}</Typography></div>
              <div style={{ fontSize: '10pt', color: '#808080', marginBottom: 10 }}>({currentUser.email})</div>
              <div>
                <Button 
                  size="large" 
                  variant="contained" 
                  color="secondary"
                  onClick={() => goToStep('ReviewProfileData')}
                >
                  Review your profile
                </Button>
              </div>
  
              <Container maxWidth={300}>
                <div style={{ fontSize: '9pt', color: '#808080', textAlign: 'center', paddingTop: 10 }}>
                  If you want to use a different account, sign out first, then sign in with the right account.
                </div>
              </Container>
            </div> :
  
            <div>
              <div className={classes.noAccount}>
                <div style={{ fontWeight: 'bold', marginBottom: 15 }}>Don't have an account yet ?</div>
                <div>
                  <ApplierForm
                    data={applier}
                    onSubmit={(data: any) => {
                      client.writeQuery({
                        query: GET_APPLIER_QUERY,
                        data: {
                          applier: {
                            __typename: 'Applier',
                            ...data
                          }
                        }
                      })

                      goToStep('FillApplicationForm')
                    }}
                  />
                </div>
  
                <Container maxWidth={300}>
                  <div style={{ fontSize: '9pt', color: '#808080', textAlign: 'center', paddingTop: 10 }}>
                    If your application is successfull, those information will be used to create your account.
                  </div>
                </Container>
              </div>
  
              <div className={classes.hasAccount}>
                Already have an account ? &nbsp;
                <Link 
                  href={{ 
                    pathname: '/signIn', 
                    query: { backTo: `/application?tsId=${props.session.id}` }
                  }}
                >
                  <a>Sign in</a>
                </Link>
              </div>
            </div>
          }
        </div>
      </Container>
    )
  }
  
  function FillApplicationFormStep(props: { onSubmit: (data: IProfileData) => void }) {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <div style={{padding: 10, textAlign: 'center'}}>
            <Typography variant="h5">Application form</Typography>
          </div>
  
          <Container maxWidth={600}>
            <ProfileForm 
              profile={applicationProfile}
              submitText="Save and Review your data"
              onSubmit={(data) => props.onSubmit(data)}
            />
          </Container>
  
          <br />
        </div>
      </div>
    )
  }
  
  function ReviewProfileDataStep() {
    if (currentUser && !props.profile) 
      return (
        <div style={{ textAlign: 'center', padding: 50 }}>
          You don't have a profile yet. Please <Link href="/myProfile"><a>create your profile</a></Link> and retry to apply.
        </div>
      )
  
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{padding: 10, textAlign: 'center'}}>
          <Typography variant="h5">Review your Profile</Typography>
        </div>
  
        {currentUser ?
          <div>
            <div style={{ fontSize: '9pt', color: '#808080', margin: '10px 0px' }}>
              If your profile is not up to date, please update it first then try to apply again.
            </div>
  
            <ProfileView profile={currentUser.profile} />
          </div> :
  
          <div>
            <ProfileView profile={applicationProfile} />
          </div>
        }
  
        <br />
  
        <div>
          {((currentUser && currentUser.profile) || (!currentUser)) && 
            <Button 
              size="large" 
              variant="contained" 
              color="secondary"
              onClick={() => goToStep('ReviewTrainingSession')}
            >
              Review Training Session Details
            </Button>
          }
        </div>
  
        <br />
      </div>
    )
  }
  
  function ReviewTrainingSessionStep() {
    const classes = makeStyles((theme: Theme) => createStyles({
      root: {
        marginBottom: 40,
        textAlign: 'center'
      }
    }))()
  
    if (currentUser && !props.profile) 
      return (
        <div style={{ textAlign: 'center', padding: 50 }}>
          You don't have a profile yet. Please <Link href="/myProfile"><a>create your profile</a></Link> and retry to apply.
        </div>
      )
  
    return (
      <Container maxWidth={600}>
        <div style={{padding: 10, textAlign: 'center'}}>
          <Typography variant="h5">Review Training Session Details</Typography>
        </div>
  
        <div className={classes.root}>
          <div>
            <Paper>  
              <div style={{ padding: 10 }}>
                <Table size="small" style={{ border: '1px solid #DFDFDF' }}>
                  <TableBody>
                    <TableRow key="dep">
                      <TableCell component="th" scope="row" style={{ color: '#808080' }}>Department</TableCell>
                      <TableCell align="right">{props.departmentTitle}</TableCell>
                    </TableRow>
  
                    <TableRow key="program">
                      <TableCell component="th" scope="row" style={{ color: '#808080' }}>Program</TableCell>
                      <TableCell align="right">{props.programTitle}</TableCell>
                    </TableRow>
  
                    <TableRow key="plan">
                      <TableCell component="th" scope="row" style={{ color: '#808080' }}>Plan</TableCell>
                      <TableCell align="right">{props.planTitle}</TableCell>
                    </TableRow>

                    <TableRow key="training">
                      <TableCell component="th" scope="row" style={{ color: '#808080' }}>Training</TableCell>
                      <TableCell align="right">{props.trainingTitle}</TableCell>
                    </TableRow>
  
                    <TableRow key="session">
                      <TableCell component="th" scope="row" style={{ color: '#808080' }}>Session</TableCell>
                      <TableCell align="right">{props.session.title}</TableCell>
                    </TableRow>
  
                    <TableRow key="sdate">
                      <TableCell component="th" scope="row" style={{ color: '#808080' }}>Start date</TableCell>
                      <TableCell align="right">{props.session.startDate}</TableCell>
                    </TableRow>
  
                    <TableRow key="duration">
                      <TableCell component="th" scope="row" style={{ color: '#808080' }}>Duration</TableCell>
                      <TableCell align="right">{props.planDuration}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
  
              {props.session.fees.length > 0 ?
                <div style={{ padding: 10 }}>
                  <div style={{ marginBottom: 5, color: '#808080' }}>Fees</div>
  
                  <Table size="small" style={{ border: '1px solid #DFDFDF' }}>
                    <TableHead>
                      <TableRow style={{ backgroundColor: '#DFDFDF' }}>
                        <TableCell>Description</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell align="right">Amount</TableCell>
                      </TableRow>
                    </TableHead>
  
                    <TableBody>
                      {props.session.fees.map(f => (
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
  
                  <Container maxWidth={400}>
                    <div style={{ fontSize: '9pt', color: '#808080', textAlign: 'center', paddingTop: 10 }}>
                      <strong>Note: </strong> These fees are the training fees at the time the session was created, they might
                      be different from the current training fees.
                    </div>
                  </Container>
                </div> :
                <div style={{ padding: 20 }}>No fees</div>
              }
            </Paper>
  
            <div>
              <Button 
                size="large" 
                variant="contained" 
                color="secondary"
                style={{ marginTop: 15 }}
                disabled={sending}
                onClick={async () => {
                  let messageBody = currentUser ? idBody({ name: currentUser.fullName, email: currentUser.email }) : idBody(applier)
                  messageBody += sessionBody()
                  if (currentUser) messageBody += '<p><h3>Profile details</h3> (Existing user)</p>'
                  else messageBody += profileBody(applicationProfile)

                  try {
                    setSending(true)
                    await sendMail({ 
                      subject: `Application form (${currentUser ? currentUser.fullName : applier.name})`, 
                      body: messageBody, 
                      to: applicationReceiver
                    })
                    goToStep('ApplicationConfirmation')
                    resetApplicationData(client)
                  } catch (ex) {
                    let errorMessage = ex.message
                    if (ex.response) errorMessage = JSON.stringify(ex.response.data.err)
                    
                    setAlertOptions({ 
                      open: true, 
                      level: 'error', 
                      message: `Could not send email: ${errorMessage}` })
                  } finally {
                    setSending(false)
                    try {
                      // send an email to the applier. If an error occured, do nothing.
                      await sendMail({ 
                        subject: `Application form received (${currentUser ? currentUser.fullName : applier.name})`, 
                        body: messageBody, 
                        to: applier.email
                      })
                    } catch(ex) {/* Do nothing */}
                  }
                }}
              >
                {sending ? <CircularProgress /> : 'Apply'}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  
  function ApplicationConfirmationStep() {
    return (
      <div style={{ textAlign: 'center', margin: '50px 0px', fontSize: '10pt', color: '#808080' }}>
        <img src="/images/success.png" width="100" height="100" />
        <br /><br />
        <div>
          Your application has been received and is being processed. We will contact you shortly.
        </div>
      </div>
    )
  }
  
  return (
    <div className={classes.root}>
      <Paper style={{ padding: 5 }}>
        <Hidden smDown>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(s =>
              <Step key={s.id}>
                <StepLabel>{s.caption}</StepLabel>
              </Step>
            )}
          </Stepper>
        </Hidden>

        <Hidden mdUp>
          <div style={{ textAlign: 'center' }}>
            {step !== 'ApplicationConfirmation' ?
              <span>Step {activeStep + 1} / {steps.length}</span> :
              <span>Done</span>
            }
          </div>
        </Hidden>
      </Paper>

      <div style={{ minHeight: 250 }}>
        {step === 'ConfirmAccount' && <ConfirmAccountStep />}

        {step === 'FillApplicationForm' &&
          <FillApplicationFormStep
            onSubmit={(data: IProfileData) => {
              goToStep('ReviewProfileData')

              client.writeQuery({
                query: GET_APPLICATION_PROFILE_QUERY,
                data: {
                  applicationProfile: {
                    __typename: 'ProfileData',
                    ...data
                  }
                }
              })
            }}
          /> 
        }

        {step === 'ReviewProfileData' && <ReviewProfileDataStep />}
        {step === 'ReviewTrainingSession' && <ReviewTrainingSessionStep />}
        {step === 'ApplicationConfirmation' &&  <ApplicationConfirmationStep />}
      </div>

      <div>
        {step !== 'ApplicationConfirmation' &&
          <div className={classes.btnBar}>
            <div className={classes.btnLeft}>
              <Button variant="contained" color="default" disabled={activeStep === 0} onClick={handleBack}>Back</Button>
            </div>

            <div className={classes.btnRight}>
              <Button 
                variant="contained" 
                color="default" 
                onClick={() => { resetApplicationData(client); props.handleCancel()}}
              >
                Cancel
              </Button>
            </div>
          </div>
        }
      </div>


      <Alert 
        level={alertOptions.level}
        message={alertOptions.message}
        open={alertOptions.open}
        onClose={() => setAlertOptions({ open: false, level: alertOptions.level, message: alertOptions.message })}
      />
    </div>
  )
}
