import { genSaltSync, hashSync } from 'bcryptjs'
import errorCode from '../util/flag/errorCode_v2'
import { AccVendor } from '../models'
import { sixDigitRandomNumber } from '../util/randomNumber'
import { validateAndConvertPhoneNumber } from '../util/validateAndConvertPN'
import errorCustom from '../util/errorCustom'
import { sendSms } from '../services/smsClient'
import JWT from 'jsonwebtoken'

export const isPhoneNumberValid = phone_number => {
  phone_number = validateAndConvertPhoneNumber.getLocalFormat(phone_number)
  if (!phone_number)
    throw errorCustom(`Phone number is not valid`, 'invalidInput', errorCode.request.invalid_body)
}

export const generateJWT=(id)=>{
  const credentials = { id }
  const token = JWT.sign(credentials, process.env.JWT_PRIVATE_KEY, { expiresIn: '30d' }) // Expiration Date For One Day
  return token
}
