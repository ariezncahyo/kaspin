import axios from 'axios'
import response from '../util/response/response'
import { validateAndConvertPhoneNumber } from '../util/helper'

export const sendWA = async(message, to) => {
  to = validateAndConvertPhoneNumber.getInternationalFormat(to).replace('+','')
  try{
    send({ passkey: process.env.WAPI_KEY, to: to, message:message })
  }
  catch (err) {
    return response.error(`send wa error : ${err.message}`, res)
  }        
}

const send = async (body) => {
  await axios.post(process.env.WAPI_URL, body, {
    headers: {
      Authorization:
      {
        'Content-Type': 'application/json'          
      }
    }
  }).then(data =>{
    console.log(data.message, 'response wapi')
  }).catch(
    async err => {
      console.log(err)
    }
  )
}