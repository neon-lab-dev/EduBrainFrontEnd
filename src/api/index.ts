/**
 * All the route of backend API
 */
const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL + '/api/v1'

const API = {
  courses: BASE_URL + '/courses',
  signup: BASE_URL + '/register',
  otp: BASE_URL + '/verifyOTP',
  login: BASE_URL + '/login',
  forgotpassword: BASE_URL + '/forgotpassword',
  resetpassword: BASE_URL + '/resetpassword',
  user: BASE_URL + '/me',
}

export default API
