import nodemailer from 'nodemailer'
import { Request, Response } from 'express'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT, 10),
  secure: false,
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
})

export default function (req: Request, res: Response) {
  const mailOptions: any = {
    from: process.env.MAIL_EMAIL,
    replyTo: process.env.MAIL_REPLYTO
  }

  mailOptions.html = req.body.html
  mailOptions.subject = req.body.subject
  mailOptions.to = req.body.to

  if (req.body.bcc) mailOptions.bcc = req.body.bcc

  transporter.sendMail(mailOptions)
    .then(info => res.status(200).json({ info }))
    .catch(err => { res.status(500).json({ err }) })
}
