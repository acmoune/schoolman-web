import React, { useState } from 'react'
import Alert, { AlertOptions } from '../components/Alert'
import validator from 'validator'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import { Paper, TextField, Button } from '@material-ui/core'

type InputErrors = {
  nameErrors: string[],
  emailErrors: string[]
}

type Props = {
  data: { name: string, email: string },
  onSubmit: (data: { name: string, email: string }) => void
}

function ApplierForm({ data, onSubmit }: Props) {
  const classes = makeStyles((theme: Theme) => createStyles({
    fieldGroup: {
      marginBottom: 25,
      padding: 10
    },
  
    groupTitle: {
      fontSize: '12pt',
      color: '#808080',
      paddingBottom: 5,
      borderBottom: '1px solid #DFDFDF',
      fontWeight: 'bold',
      marginBottom: 15
    },
  
    field: {
      marginBottom: 30
    }
  }))()

  const [inputErrors, setInputErrors] = useState<InputErrors>({ nameErrors: [], emailErrors: [] })
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({ open: false, level: 'info', message: '' })

  // Fields state variables
  const [name, setName] = useState<string>(data.name)
  const [email, setEmail] = useState<string>(data.email)
  
  const validateData = (): { isValid: boolean, errors: InputErrors } => {
    const nameErrors: string[] = []
    const emailErrors: string[] = []

    if (validator.isEmpty(name)) nameErrors.push('Your name is required')
    if (validator.isEmpty(email)) emailErrors.push('Your email is required')

    const isValid = nameErrors.length == 0 && emailErrors.length == 0 
    const errors = { nameErrors, emailErrors }
    return ({ isValid, errors })
  }

  const submit = (cb: (errMessage: string, data?: any) => any) => {
    const { isValid, errors } = validateData()
    setInputErrors(errors)

    if (!isValid) return cb('Please enter valid inputs')
    return cb('', { name, email })
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <Paper className={classes.fieldGroup}>
        <div className={classes.groupTitle}>Provide your name and email</div>
        <div>
          <TextField
            className={classes.field}
            id="name"
            name="name"
            label="Full Name"
            fullWidth
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            error={inputErrors.nameErrors.length > 0}
            helperText={inputErrors.nameErrors.join(', ')}
          />

          <TextField
            className={classes.field}
            id="email"
            name="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            error={inputErrors.emailErrors.length > 0}
            helperText={inputErrors.emailErrors.join(', ')}
          />
        </div>
      </Paper>
    
      <div style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => submit((errMessage, data) => {
            if (errMessage) return setAlertOptions({ open: true, level: 'error', message: errMessage })
            if (data) return onSubmit(data)
            return;
          })}
        >
          Save and Fill application form
        </Button>
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

export default ApplierForm
