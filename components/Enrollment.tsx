import React from 'react'
import IEnrollment from '../server/src/models/accounts/Enrollment'
import EnrollmentItemContent from './EnrollmentItemContent'
import { Typography } from '@material-ui/core'
import Bill from './Bill'

export default function Enrollment({ enrollment }: { enrollment: IEnrollment }) {
  return (
    <div>
      <EnrollmentItemContent enrollment={enrollment} />

      <Typography variant="h6" color="textSecondary" style={{ marginBottom: 10 }}>Bills</Typography>

      {enrollment.bills.map(bill => <Bill bill={bill} key={bill.billId} />)}
    </div>
  )
}
