import React from 'react'
import IEnrollment from '../server/src/models/accounts/Enrollment'
import { Paper, Typography } from '@material-ui/core'

export default function EnrollmentItemContent({ enrollment }: { enrollment: IEnrollment }) {
  return (
    <Paper style={{ padding: 10, display: 'flex', marginBottom: 10 }}>
      <div style={{ flexGrow: 1 }}>
        <Typography variant="h6" color="secondary">{enrollment.trainingTitle}</Typography>

        <div style={{ color: '#808080', fontSize: '9pt' }}>
          Program: <span style={{color: '#000000'}}>{enrollment.programTitle}</span> &nbsp;
          Plan: <span style={{color: '#000000'}}>{enrollment.planTitle}</span> &nbsp;
          Session: <span style={{color: '#000000'}}>{enrollment.sessionTitle} ({enrollment.sessionStatus})</span>
        </div>
      </div>
    </Paper>
  )
}
