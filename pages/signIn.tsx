import * as React from 'react'
import MainLayout from '../layouts/MainLayout'
import Container from '../components/Container'
import { Typography, Paper, TextField, Button } from '@material-ui/core'
import axios from 'axios'
import validator from 'validator'
import { apiBaseUrl, authCookieName } from '../app.config'
import { setCookie } from '../lib/cookie'
import Router from 'next/router'
import withApollo from '../lib/with-apollo'
import withAuth from '../lib/with-auth'

type InputErrors = { emailErrors: string[], passwordErrors: string[] }

function SignInPage({ backTo }: { backTo: string }) {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [inputErrors, setInputErrors] = React.useState<InputErrors>({ emailErrors: [], passwordErrors: []})
  const [serverError, setServerError] = React.useState<string[]>([])

  const validateData = (): { isValid: boolean, errors: InputErrors } => {
    const emailErrors: string[] = []
    const passwordErrors: string[] = []

    if (validator.isEmpty(email)) emailErrors.push('Your email is required')
    if (!validator.isEmail(email)) emailErrors.push('Enter a valid email address')

    if (validator.isEmpty(password)) passwordErrors.push('Your password is required')

    const isValid = emailErrors.length == 0 && passwordErrors.length == 0
    const errors = { emailErrors, passwordErrors }
    return ({ isValid, errors })
  }

  const submit = (cb: (errMessage: string, token: string) => any) => {
    const { isValid, errors } = validateData()
    setInputErrors(errors)

    if (!isValid && errors) {
      return cb('Please enter valid inputs', '')
    }

    return axios.post(`${apiBaseUrl}/auth/authenticate`, { email, password }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => cb('', res.data.token))
      .catch(err => cb(err.response.data.message, ''))
  }

  return (
    <MainLayout title="Sign In">
      <Container maxWidth={400}>
        <div style={{ marginTop: 50, marginBottom: 20 }}>
          <Typography variant="h5" color="textSecondary" style={{ textAlign: 'center', paddingBottom: 15 }}>Sign In</Typography>

          <Paper style={{ padding: 15 }}>
            {serverError.length > 0 && <div style={{ marginBottom: 15, color: 'red' }}>{serverError.join(', ')}</div>}

            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              error={inputErrors.emailErrors.length > 0}
              helperText={inputErrors.emailErrors.join(', ')}
            />

            <br />
            <br />

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              error={inputErrors.passwordErrors.length > 0}
              helperText={inputErrors.passwordErrors.join(', ')}
            />

            <br />
            <br />
            <br />

            <Button
              color="secondary"
              size="large"
              fullWidth
              variant="contained"
              onClick={() => submit((errMessage, token) => {
                if (errMessage) return setServerError([errMessage])
                setCookie(authCookieName, token)
                return Router.push(backTo || '/')
              })}
            >
              Sign In
            </Button>
          </Paper>
        </div>

        <div style={{ color: '#808080', fontSize: '9pt', padding: 10 }}>
          Forgot your email or password ? Please contact Administration.
        </div>
      </Container>
    </MainLayout>
  )
}

SignInPage.getInitialProps = ({ query }: any) => ({ backTo: query.backTo, authRequired: false })

export default withApollo(withAuth(SignInPage))
