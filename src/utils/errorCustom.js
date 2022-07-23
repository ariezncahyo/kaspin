export default (msg, func, flag) => {
  let e = new Error(msg)
  e.resFn = func
  e.flag = flag
  return e
}