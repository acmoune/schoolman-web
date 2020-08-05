"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
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
});
function default_1(req, res) {
    const mailOptions = {
        from: process.env.MAIL_EMAIL,
        replyTo: process.env.MAIL_REPLYTO
    };
    mailOptions.html = req.body.html;
    mailOptions.subject = req.body.subject;
    mailOptions.to = req.body.to;
    if (req.body.bcc)
        mailOptions.bcc = req.body.bcc;
    transporter.sendMail(mailOptions)
        .then(info => res.status(200).json({ info }))
        .catch(err => { res.status(500).json({ err }); });
}
exports.default = default_1;
