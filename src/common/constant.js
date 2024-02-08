const ROUTES ={
    BASE_API: '/api/v1',
    SIGN_UP: '/user_signup',
    CREATE_USER: '/create_user',
    USER_LOGIN: '/user_login',
    CLIENT_DETAILS: '/client_details'

}

const PARAMS = {

}

const STATUS_CODE = {
    SUCCESS: 200,
    CREATE_USER: 201,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

const ERROR_MESSAGE = {
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    NOT_FOUND: "Not Found",
    USER_NOT_CREATED: "Create User Failed",
    SIGN_UP_FAIL: "Sign Up Failed",
    USER_LOGIN_FAIL: "User Login Failed",
    CLIENT_DETAILS_NOT_FOUND: "Client Details Not found",
    INVALID_CREDENTIALS: "Invalid Credentials"
}

module.exports = {
    ROUTES,
    PARAMS,
    STATUS_CODE,
    ERROR_MESSAGE
}