import React from 'react'
import { IBill } from '../server/src/models/accounts/Enrollment'
import { Paper, Typography } from '@material-ui/core'
import axios from 'axios'
import { currency } from '../lib/utilities'
import { getCookieFromBrowser } from '../lib/cookie'
import { apiBaseUrl, authCookieName } from '../app.config'

export default function Bill({ bill }: { bill: IBill }) {
  var isPaid = bill.payments.reduce((s, p) => s + p.amount, 0) >= bill.amount

  const statusColor = () => {
    if (isPaid) return 'green'
    return 'red'
  }

  return (
    <Paper style={{ padding: 10, marginBottom: 10 }}>
      <div style={{ display: 'flex', paddingBottom: 5, marginBottom: 10 }}>
        <div style={{ flexGrow: 1 }}>
          <Typography variant="body1" color="secondary">{bill.description}</Typography>

          <div style={{ color: '#808080', fontSize: '9pt' }}>
            Fee type: <span style={{color: '#000000'}}>{bill.feeType}</span> &nbsp;
            Amount: <span style={{color: '#000000'}}>{currency(bill.amount)}</span> &nbsp;
            Status: <span style={{ color: statusColor() }}>{isPaid ? 'Paid' : 'Not Paid'}</span>
          </div>
        </div>

        <div style={{ color: '#808080', fontSize: '9pt' }}>
          <a
            href="#"
            onClick={() => {
              axios.get(`${apiBaseUrl}/printpdf/bills/${bill.billId}`, {
                responseType: 'blob', // important
                headers: { 'schoolman_token': getCookieFromBrowser(authCookieName) }
              })
                .then(res => {
                  const url = window.URL.createObjectURL(new Blob([res.data]))
                  const link = document.createElement('a')
                  link.href = url
                  link.setAttribute('download', `imit-bill-${bill.billId}.pdf`)
                  document.body.appendChild(link)
                  link.click()
                })
            }}
          >
            Print Bill
          </a>
        </div>
      </div>

      <div style={{ color: '#808080', marginBottom: 5 }}>Payments</div>
      {bill.payments.length > 0 ? 
        bill.payments.map(p => (
          <div style={{ display: 'flex', padding: '5px 0px', borderTop: '1px solid #DFDFDF', color: '#808080', fontSize: '9pt' }}>
            <div style={{ flexGrow: 1 }}>
              Amount: <span style={{color: '#000000'}}>{currency(p.amount)}</span> &nbsp;
              Date: <span style={{color: '#000000'}}>{p.date}</span>
            </div>
          </div>
        )) :
        <div style={{ padding: '10px 0px' }}>(No payment)</div>
      }

      <div style={{ color: '#808080', fontSize: '9pt', paddingTop: 5, marginTop: 10, textAlign: 'right' }}>
        Total paid: <span style={{color: '#000000'}}>{currency(bill.payments.map(p => p.amount).reduce((s, p) => s + p, 0))}</span> &nbsp;
        Remaining: <span style={{ color: 'orange' }}>{currency(Math.max(0, bill.amount - (bill.payments.map(p => p.amount).reduce((s, p) => s + p, 0))))}</span>
      </div>
    </Paper>
  )
}
