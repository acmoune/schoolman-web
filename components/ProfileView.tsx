import React from 'react'
import IAccountProfile from '../server/src/models/accounts/AccountProfile'
import {
  Paper,
  Table, 
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import Container from './Container'

export default function ProfileView({ profile }: { profile: IAccountProfile }) {
  const classes = makeStyles((theme: Theme) => createStyles({
    profileBox: {
      marginBottom: 25,
      padding: 10
    },

    boxTitle: {
      fontSize: '14pt',
      color: '#808080',
      paddingBottom: 5
    },

    boxContent: {}
  }))()

  return (
    <Container maxWidth={600}>
      <Paper>
        <div className={classes.profileBox}>
          <div className={classes.boxTitle}>Personal Information</div>
          <div className={classes.boxContent}>
            <Table size="small" style={{ border: '1px solid #DFDFDF' }}>
              <TableBody>
                <TableRow key="duration">
                  <TableCell component="th" scope="row" style={{ color: '#808080' }}>Birth date</TableCell>
                  <TableCell align="right">{profile.birthDate ? new Date(profile.birthDate).toLocaleDateString() : '(missing)'}</TableCell>
                </TableRow>

                <TableRow key="duration">
                  <TableCell component="th" scope="row" style={{ color: '#808080' }}>Birth place</TableCell>
                  <TableCell align="right">{profile.birthPlace}</TableCell>
                </TableRow>

                <TableRow key="duration">
                  <TableCell component="th" scope="row" style={{ color: '#808080' }}>Residence</TableCell>
                  <TableCell align="right">{profile.residence}</TableCell>
                </TableRow>

                <TableRow key="duration">
                  <TableCell component="th" scope="row" style={{ color: '#808080' }}>Phone number</TableCell>
                  <TableCell align="right">{profile.phoneNumber}</TableCell>
                </TableRow>

                <TableRow key="duration">
                  <TableCell component="th" scope="row" style={{ color: '#808080' }}>Nationality</TableCell>
                  <TableCell align="right">{profile.nationality}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className={classes.profileBox} style={{ marginBottom: 0 }}>
          <div className={classes.boxTitle} style={{ borderBottom: '1px solid #DFDFDF' }}>Other details</div>
          <div 
            className={classes.boxContent} 
            dangerouslySetInnerHTML={{ __html: profile.otherDetails || '(empty)' }}
            style={{ textAlign: 'left' }}
          />
        </div>
      </Paper>
    </Container>
  )
}
