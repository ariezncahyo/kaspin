import '../util/initEnv'

import { Sequelize } from 'sequelize'
import config from 'config'

export const connection1 = new Sequelize({
  host: config.get('moduleSpecific.kaspin.db.host'),
  username: config.get('moduleSpecific.kaspin.db.user'),
  password: process.env.DB_PASS,
  database: config.get('moduleSpecific.kaspin.db.name'),
  dialect: config.get('moduleSpecific.kaspin.db.dialect'),
  logging: false,
  dialectOptions: { // for reading
    useUTC: false,
    timezone: '+07:00',
  },
  timezone: '+07:00', // for writing
})

