// 400 Bad Request – client sent an invalid request, such as lacking required request body or parameter
// 401 Unauthorized – client failed to authenticate with the server
// 403 Forbidden – client authenticated but does not have permission to access the requested resource
// 404 Not Found – the requested resource does not exist
// 412 Precondition Failed – one or more conditions in the request header fields evaluated to false
// 500 Internal Server Error – a generic error occurred on the server
// 503 Service Unavailable – the requested service is not available


module.exports = {
  success(message, res, data) {
    res.status(200).json({
      success: true,
      flag: 200,
      status_code: 200,
      message,
      result: data
    })
  },
  error(message, res, flag = 0) {
    res.status(500).json({
      success: false,
      flag,
      status_code: 500,
      message
    })
  },
  notFound(message, res, flag = 0) {
    res.status(404).json({
      success: false,
      flag,
      status_code: 404,
      message
    })
  },
  notFoundData(message, res, flag = 0) {
    res.status(204).json({
      success: false,
      flag,
      status_code: 204,
      message
    })
  },
  invalidInput(message, res, flag = 0) {
    res.status(400).json({
      success: false,
      flag,
      status_code: 400,
      message
    })
  },
  unauthorized(message, res, flag = 0) {
    res.status(401).json({
      success: false,
      flag,
      status_code: 401,
      message
    })
  },
  forbidden(message, res, flag = 0) {
    res.status(403).json({
      success: false,
      flag,
      status_code: 403,
      message
    })
  },
  conflict(message, res, flag = 0) {
    res.status(409).json({
      success: false,
      flag,
      status_code: 409,
      message
    })
  }
}
