import response from '../utils/response/response'

export default (err, req, res, next) => {
  switch (err.httpCode) {
  case 400:
    response.invalidInput(err.message || 'Invalid Input', res)
    break
  case 404:
    response.notFound(err.message || 'Not Found', res)
    break
  default:
    response.error(err.message || 'Internal Server Error', res)
  }
}
