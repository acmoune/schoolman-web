import axios from 'axios'
import { baseUrl } from '../app.config'

export default function sendMail(options: {
  subject: string,
  body: string,
  to: string
}) {
  return axios.post(`${baseUrl}/sendMail`, {
    subject: options.subject,
    html: options.body,
    to: options.to
  })
}
