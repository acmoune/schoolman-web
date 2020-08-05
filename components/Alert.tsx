import * as React from 'react'
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { amber, green, lightBlue } from '@material-ui/core/colors'
import CloseIcon from '@material-ui/icons/Close'

export type Level = 'success' | 'error' | 'info' | 'warning'
export type AlertOptions = { open: boolean, level: Level, message: string }

function Alert({ level, message, open, onClose }: { level: Level, message: string, open: boolean, onClose: Function }) {
  const classes = makeStyles((theme: Theme) => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: lightBlue[700],
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    }
  }))()


  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={() => onClose()}
    >
      <SnackbarContent
        className={classes[level]}
        aria-describedby="client-snackbar"
        message={<span>{message}</span>}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={() => onClose()}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    </Snackbar>
  )
}

export default Alert
