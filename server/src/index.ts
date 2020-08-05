require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import next from 'next'
import https from 'https'
import enforce from 'express-sslify'
import fs from 'fs'
import path from 'path'
import cors from 'cors'
import config from '../../app.config'
import graphqlServer from './graphql'
import mail from './routes/mail'

var isDev = process.env.NODE_ENV !== 'production'
var app = next({ dev: isDev })
var handler = app.getRequestHandler()
//const key = fs.readFileSync(path.resolve(__dirname, '../key.pem'), 'utf8')
//const cert = fs.readFileSync(path.resolve(__dirname, '../cert.crt'), 'utf8')

app.prepare()
  .then(() => {
    const server = express()
    //if (!isDev) server.use(enforce.HTTPS({ trustProtoHeader: true }))
    server.use(cors({
      origin: ['https://imit-client.herokuapp.com', 'http://imit-client.herokuapp.com', 'http://training.imitpford.org'],
      optionsSuccessStatus: 200
    }))

    graphqlServer.applyMiddleware({ app: server })
    server.get('/favicon.ico', (req, res) => res.status(204))
    server.post('/sendmail', bodyParser.json(), mail)
    server.get('*', (req, res) => handler(req, res))
    server.listen(process.env.PORT || 4000)
    //https.createServer({ key, cert }, server).listen(process.env.PORT || 4000)
  })
  .then(() => console.log('SchoolMan Client started on ' + config.baseUrl))
  .catch(err => { console.log(err.stack); process.exit(1) })
