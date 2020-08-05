"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const next_1 = __importDefault(require("next"));
const cors_1 = __importDefault(require("cors"));
const app_config_1 = __importDefault(require("../../app.config"));
const graphql_1 = __importDefault(require("./graphql"));
const mail_1 = __importDefault(require("./routes/mail"));
var isDev = process.env.NODE_ENV !== 'production';
var app = next_1.default({ dev: isDev });
var handler = app.getRequestHandler();
//const key = fs.readFileSync(path.resolve(__dirname, '../key.pem'), 'utf8')
//const cert = fs.readFileSync(path.resolve(__dirname, '../cert.crt'), 'utf8')
app.prepare()
    .then(() => {
    const server = express_1.default();
    //if (!isDev) server.use(enforce.HTTPS({ trustProtoHeader: true }))
    server.use(cors_1.default({
        origin: ['https://imit-client.herokuapp.com', 'http://imit-client.herokuapp.com', 'http://training.imitpford.org'],
        optionsSuccessStatus: 200
    }));
    graphql_1.default.applyMiddleware({ app: server });
    server.get('/favicon.ico', (req, res) => res.status(204));
    server.post('/sendmail', body_parser_1.default.json(), mail_1.default);
    server.get('*', (req, res) => handler(req, res));
    server.listen(process.env.PORT || 4000);
    //https.createServer({ key, cert }, server).listen(process.env.PORT || 4000)
})
    .then(() => console.log('SchoolMan Client started on ' + app_config_1.default.baseUrl))
    .catch(err => { console.log(err.stack); process.exit(1); });
