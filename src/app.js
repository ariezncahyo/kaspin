import './utils/initEnv'

import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import response from './utils/response/response'
import errorCode from './utils/flag/errorCode'
import { debugError, debugRedis } from './utils/debug'
import errorhandler from './middleware/errorHandling'
import routes from './routes'

const app = express()

/**
 * Protect app from some well-known web
 * vulnerabilities by setting HTTP headers appropriately.
 * @public
 */
app.use(cors())
app.use(helmet())
app.disable('x-powered-by')
app.disable('etag')
app.use(express.json({ limit: "500mb" }));

/**
 * Define Parser
 * Json Body parser
 * @public
 */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Routes
 */
app.use(routes)

/**
 * Handle error
 * basic error handling
 * @public
 */
app.use('*', (req, res, next) => {
  response.invalidInput('Route Not Found', res, errorCode.routes_notfound)
})

app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    response.invalidInput(err.error.message, res, err.error.name)
  }
  else {
    const resFn = err.resFn || 'serverError'
    const resFlag = err.flag || err.message
    if (err) response[resFn](err.message || 'Internal Server Error', res, resFlag)
  }
})

app.use(errorhandler)

process.on('unhandledRejection', err => {
  debugError(err.message)
})

export default app
