const ENVIRONMENT = 'Prod'

exports.baseUrl               =  ENVIRONMENT === 'Prod' ? 'http://schoolman-web.herokuapp.com' : 'http://localhost:4000'
exports.apiServer             =  ENVIRONMENT === 'Prod' ? 'http://schoolman-server.herokuapp.com' : 'http://localhost:9000'
exports.apiBaseUrl            =  exports.apiServer + '/api'
exports.authCookieName        = 'schoolman_token'
exports.applicationReceiver   = 'ac.moune@gmail.com'
exports.s3Bucket              = 'imit-images'
exports.s3Region              = 'us-west-2'
