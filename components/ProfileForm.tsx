import React, { useState } from 'react'
import Alert, { AlertOptions } from '../components/Alert'
import { IProfileData } from '../server/src/models/accounts/AccountProfile'
import validator from 'validator'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import { Paper, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { 
  Editor, 
  EditorState, 
  ContentState, 
  convertToRaw,
  convertFromHTML,
  RichUtils
} from 'draft-js'
import draftToHtml from 'draftjs-to-html'


type InputErrors = {
  birthDateErrors: string[],
  birthPlaceErrors: string[],
  residenceErrors: string[],
  phoneNumberErrors: string[],
  nationalityErrors: string[]
}

type Props = {
  profile?: IProfileData,
  submitText?: string,
  onSubmit: (data: IProfileData) => any
}

function ProfileForm({ profile, submitText, onSubmit }: Props) {
  const classes = makeStyles((theme: Theme) => createStyles({
    fieldGroup: {
      marginBottom: 25,
      padding: 10
    },
  
    groupTitle: {
      fontSize: '16pt',
      color: '#808080',
      paddingBottom: 5,
      borderBottom: '1px solid #DFDFDF',
      marginBottom: 15
    },
  
    field: {
      marginBottom: 30
    }
  }))()

  const [inputErrors, setInputErrors] = useState<InputErrors>({
    birthDateErrors: [],
    birthPlaceErrors: [],
    residenceErrors: [],
    phoneNumberErrors: [],
    nationalityErrors: []
  })
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({ open: false, level: 'info', message: '' })

  function contentFrom(content: string): ContentState {
    if (typeof window !== 'undefined') {
      const { contentBlocks, entityMap } = convertFromHTML(content)
      return ContentState.createFromBlockArray(contentBlocks, entityMap)
    }
    return ContentState.createFromText(content)
  }

  // Fields state variables
  const [birthDate, setBirthDate] = useState<Date | null>(profile && profile.birthDate ? new Date(profile.birthDate) :  null)
  const [birthPlace, setBirthPlace] = useState<string>(profile && profile.birthPlace ? profile.birthPlace : '')
  const [residence, setResidence] = useState<string>(profile && profile.residence ? profile.residence : '')
  const [phoneNumber, setPhoneNumber] = useState<string>(profile && profile.phoneNumber ? profile.phoneNumber : '')
  const [nationality, setNationality] = useState<string>(profile && profile.nationality ? profile.nationality : '')
  const [otherDetails, setOtherDetails] = useState<EditorState>(profile && profile.otherDetails ? EditorState.createWithContent(contentFrom(profile.otherDetails)) : EditorState.createEmpty())

  const validateData = (): { isValid: boolean, errors: InputErrors } => {
    const birthDateErrors: string[] = []
    const birthPlaceErrors: string[] = []
    const residenceErrors: string[] = []
    const phoneNumberErrors: string[] = []
    const nationalityErrors: string[] = []

    if (!birthDate) birthDateErrors.push('Your birth day is required')
    if (validator.isEmpty(birthPlace)) birthPlaceErrors.push('Your birth place is required')
    if (validator.isEmpty(residence)) residenceErrors.push('Your residence is required')
    if (validator.isEmpty(phoneNumber)) phoneNumberErrors.push('Your phone number is required')
    if (validator.isEmpty(nationality)) nationalityErrors.push('Your nationality is required')

    const isValid = 
      birthDateErrors.length == 0 && 
      birthPlaceErrors.length == 0 && 
      residenceErrors.length == 0 &&
      phoneNumberErrors.length == 0 &&
      nationalityErrors.length == 0
    
    const errors = { birthDateErrors, birthPlaceErrors, residenceErrors, phoneNumberErrors, nationalityErrors }
    
    return ({ isValid, errors })
  }

  const submit = (cb: (errMessage: string, data?: any) => any) => {
    const { isValid, errors } = validateData()
    setInputErrors(errors)

    if (!isValid) return cb('Please enter valid inputs')

    return cb('', {
      birthDate: birthDate ? birthDate.toISOString() : null,  
      birthPlace, 
      residence, 
      phoneNumber, 
      nationality,
      otherDetails: draftToHtml(convertToRaw(otherDetails.getCurrentContent()))
    })
  }

  function onChange(command: any, editorState: EditorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setOtherDetails(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  return (
    <div style={{ textAlign: 'left' }}>
      <Paper className={classes.fieldGroup}>
        <div className={classes.groupTitle}>Personal Information</div>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className={classes.field}
              autoOk
              fullWidth
              format="MM/dd/yyyy"
              variant="inline"
              id="birthDate"
              label="Birthdate"
              value={birthDate}
              onChange={setBirthDate}
              error={inputErrors.birthDateErrors.length > 0}
              helperText={inputErrors.birthDateErrors.join(', ')}
            />
          </MuiPickersUtilsProvider>

          <TextField
            className={classes.field}
            id="birthPlace"
            name="birthPlace"
            label="Birth place"
            fullWidth
            value={birthPlace}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBirthPlace(e.target.value)}
            error={inputErrors.birthPlaceErrors.length > 0}
            helperText={inputErrors.birthPlaceErrors.join(', ')}
          />

          <TextField
            className={classes.field}
            id="residence"
            name="residence"
            label="Residence"
            fullWidth
            value={residence}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setResidence(e.target.value)}
            error={inputErrors.residenceErrors.length > 0}
            helperText={inputErrors.residenceErrors.join(', ')}
          />

          <TextField
            className={classes.field}
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            fullWidth
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
            error={inputErrors.phoneNumberErrors.length > 0}
            helperText={inputErrors.phoneNumberErrors.join(', ')}
          />

          <TextField
            id="nationality"
            name="nationality"
            label="Nationality"
            fullWidth
            value={nationality}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNationality(e.target.value)}
            error={inputErrors.nationalityErrors.length > 0}
            helperText={inputErrors.nationalityErrors.join(', ')}
          />
        </div>
      </Paper>

      <Paper className={classes.fieldGroup}>
        <div className={classes.groupTitle}>Other Details</div>
        <div style={{ fontSize: '9pt', color: '#808080', marginBottom: 10 }}>
          Please provide additional details here, anything that is valuable for you. For example, if 
          you already have records with Cisco, ACCA, CIPS, or whichever program you want to apply for, 
          kindly provide references here.
        </div>

        <div style={{ border: '1px solid #DFDFDF', padding: 5, borderRadius: 5 }}>
          {(typeof window !== 'undefined') &&
            <Editor
              editorState={otherDetails}
              onChange={(editorState: EditorState) => setOtherDetails(editorState)}
              handleKeyCommand={onChange}
            />
          }
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
          {`${submitText || 'Save'}`}
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

export default ProfileForm
