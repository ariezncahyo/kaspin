import Jwt from 'jsonwebtoken'
import response from '../util/response/response'
import flag from '../util/flag/errorCode'

export default async (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    try {
      const xtoken = token.replace('Bearer ', '')
      const decoded = await Jwt.verify(xtoken, process.env.jwtPrivateKey)
      req.decoded = decoded
      next()
    }
    catch (error) {
      response.unauthorized('Unauthorized access, please contact our technical support', res, flag.jwt_token_invalid)
    }
  }
  else {
    return response.notFound('token not found', res, flag.jwt_token_empty)
  }
}
