import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Container from '../components/Container'
import { Typography, Paper, TextField, Button } from '@material-ui/core'
import axios from 'axios'
import validator from 'validator'
import { apiBaseUrl } from '../app.config'
import Alert, { AlertOptions } from '../components/Alert'
import { authCookieName } from '../app.config'
import { getCookieFromBrowser } from '../lib/cookie'
import { useAuth } from '../components/AuthContext'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'

type InputErrors = { 
  oldPasswordErrors: string[], 
  newPasswordErrors: string[], 
  passwordConfirmationErrors: string[]
}

function ResetPasswordPage() {
  const { currentUser } = useAuth()

  const [oldPassword, setOldPassword] = React.useState<string>('')
  const [newPassword, setNewPassword] = React.useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState<string>('')
  const [inputErrors, setInputErrors] = React.useState<InputErrors>({ oldPasswordErrors: [], newPasswordErrors: [], passwordConfirmationErrors: [] })
  const [alertOptions, setAlertOptions] = React.useState<AlertOptions>({ open: false, level: 'info', message: '' })

  const validateData = (): { isValid: boolean, errors: InputErrors } => {
    const oldPasswordErrors: string[] = []
    const newPasswordErrors: string[] = []
    const passwordConfirmationErrors: string[] = []

    if (validator.isEmpty(oldPassword)) oldPasswordErrors.push('The current password is required')

    if (validator.isEmpty(newPassword)) newPasswordErrors.push('The new password is required')
    if (!validator.isLength(newPassword, { min: 6 })) newPasswordErrors.push('The password should have at least 6 charactars')

    if (newPassword !== passwordConfirmation) passwordConfirmationErrors.push('Confirmation does not match the new password')

    const isValid = oldPasswordErrors.length == 0 && newPasswordErrors.length == 0 && passwordConfirmationErrors.length == 0
    const errors = { oldPasswordErrors, newPasswordErrors, passwordConfirmationErrors }
    return ({ isValid, errors })
  }

  const submit = (email: string, cb: (errMessage?: string) => any) => {
    const { isValid, errors } = validateData()
    setInputErrors(errors)

    if (!isValid && errors) {
      return cb('Please enter valid inputs')
    }

    return axios.patch(`${apiBaseUrl}/accountPassword`, { email, oldPassword, newPassword }, {
      headers: { 
        'Content-Type': 'application/json',
        'schoolman_token': getCookieFromBrowser(authCookieName)
      }
    })
      .then(() => cb())
      .catch(err => { console.log(err); cb(err.response.data.message || err.response.statusText) })
  }

  return (
    <MainLayout title="Reset Password">
      <Container maxWidth={400}>
        <div style={{ marginTop: 50, marginBottom: 20 }}>
          <Typography variant="h5" color="textSecondary" style={{ textAlign: 'center', paddingBottom: 15 }}>Reset Password</Typography>

          <Paper style={{ padding: 15 }}>
            <div>
              {currentUser &&
                <div> 
                  <TextField
                    id="oldPassword"
                    name="oldPassword"
                    label="Current Password"
                    type="password"
                    fullWidth
                    value={oldPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
                    error={inputErrors.oldPasswordErrors.length > 0}
                    helperText={inputErrors.oldPasswordErrors.join(', ')}
                  />
    
                  <br />
                  <br />
    
                  <TextField
                    id="newPassword"
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth
                    value={newPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                    error={inputErrors.newPasswordErrors.length > 0}
                    helperText={inputErrors.newPasswordErrors.join(', ')}
                  />
    
                  <br />
                  <br />
    
                  <TextField
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    label="Password Confirmation"
                    type="password"
                    fullWidth
                    value={passwordConfirmation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value)}
                    error={inputErrors.passwordConfirmationErrors.length > 0}
                    helperText={inputErrors.passwordConfirmationErrors.join(', ')}
                  />
    
                  <br />
                  <br />
                  <br />
    
                  <Button
                    color="secondary"
                    size="large"
                    fullWidth
                    variant="contained"
                    onClick={() => submit(currentUser.email, (errMessage) => {
                      if (errMessage) return setAlertOptions({ open: true, level: 'error', message: errMessage })
                      setOldPassword('')
                      setNewPassword('')
                      setPasswordConfirmation('')
                      setAlertOptions({ open: true, level: 'info', message: 'Password updated successfully' })
                    })}
                  >
                    Submit
                  </Button>
                </div>
              }
            </div>
          </Paper>
        </div>

        <div style={{ color: '#808080', fontSize: '9pt', padding: 10 }}>
          Forgot your current password ? Please contact Administration.
        </div>
      </Container>

      <Alert 
        level={alertOptions.level}
        message={alertOptions.message}
        open={alertOptions.open}
        onClose={() => setAlertOptions({ open: false, level: alertOptions.level, message: alertOptions.message })}
      />
    </MainLayout>
  )
}

ResetPasswordPage.getInitialProps = () => ({ authRequired: true }) 

export default withApollo(withAuth(ResetPasswordPage))
