import moment from 'moment'
import phone from 'libphonenumber-js'
import crypto from 'crypto'

/** validate string only number */
export const stringNumberOnly = (string=null)=>{
  return string.match(/^[0-9]+$/) != null;
}

/** validate string alphabet only */
export const stringAlphabetOnly = (string=null)=>{
  return string.match(/^[a-zA-Z ]+$/) != null;
}

/** email format */
export const emailFormat = (string)=>{
  return string.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) != null;
}

// Will return an array between two dates
export const getDatesBetweenTwoDate = (startDate, endDate) => {
  return new Promise((resolve)=> {
    let dates = [];
    let currDate = moment(startDate).startOf("day")
    let lastDate = moment(endDate).startOf("day")

    let now = currDate.clone()
    while(now.isSameOrBefore(lastDate)) {
      dates.push(now.format("Y-MM-DD"))
      now.add(1, "days")
    }
    resolve(dates)
  })
}

// Will return day of week from date
export const getDayOffWeekFromDate = (date) => {
  return new Promise((resolve) => {
    resolve(moment(date).weekday())
  })
}

export const validateAndConvertPhoneNumber = {
  getInternationalFormat(input) {
    if(!input) throw new Error("Invalid phone number format")
    const internationFormat = phone(input.toString(), 'ID') 
    return internationFormat['number'] // This will return either undefined or, Valid phone number
  },
  getLocalFormat(input) {
    const localPhone = phone(input.toString(),'ID')
    const localFormat = '0' + localPhone['nationalNumber']
    return localFormat
  }
}

export const indonesianNumberGen = () => {
  let generatedNumber = '628' // Indonesian Country Code Prefix
  for (let i = 0; i < 10; i++) {
    generatedNumber = generatedNumber + Math.floor(Math.random() * 10)
  }
  return generatedNumber
}

export const generateTokenKey = async () => {
  const secret = new Date().getTime().toString()
  const token = crypto.createHash('sha256', secret).update(secret).digest('hex')
  return token
}

export const generateOrderCode = async () => {
  return (Math.random() + 1).toString(36).substring(5);
}