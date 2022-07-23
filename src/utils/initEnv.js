const envs = {
  staging: 'staging',
  prod: 'production',
  dev: 'development',
  test: 'test'
}

const defaultEnv = envs.construct

import { debugError, debugApp } from './debug'
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = defaultEnv
  debugError(`No Env has been found. By default, ${defaultEnv} has been set as NODE_ENV.`)
}

import dotEnv from 'dotenv-flow'
dotEnv.config()

debugApp(`Environment: ${process.env.NODE_ENV}`)
