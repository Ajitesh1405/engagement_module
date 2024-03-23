const ROUTES ={
    BASE_API: '/api/v1',
    SIGN_UP: '/user_signup',
    CREATE_USER: '/create_user',
    USER_LOGIN: '/user_login',
    CLIENT_DETAILS: '/client_details',
    BILLING_ENTITY_DETAILS: '/billing_entity_details',
    PERSON_INCHARGE_DETAILS: '/person_inchagrge_details',
    BILLING_SERVICES_DETAILS: '/billable_services_details',
    ENGAGEMENT_EMPLOYEE_NAME: '/engagement_employees',
    BILLING_EXPENSES: '/billing_expenses',
    BILLING_TEMPLATES: '/billing_templates',
    CREATE_ENGAGEMENT: '/create_engagement'

}

const PARAMS = {

}

const STATUS_CODE = {
    SUCCESS: 200,
    CREATE_USER: 201,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    FAIL: 400
}

const SUCCESS_MESSAGES = {
    ENGAGEMENT_HAS_BEEN_CREATED: "Engagement has been created"
}

const ERROR_MESSAGE = {
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    NOT_FOUND: "Not Found",
    USER_NOT_CREATED: "Create User Failed",
    ENGAGEMENT_CREATION_FAILED: "Unable to create engagement",
    SIGN_UP_FAIL: "Sign Up Failed",
    USER_LOGIN_FAIL: "User Login Failed",
    CLIENT_DETAILS_NOT_FOUND: "Client Details Not found",
    COMPANY_DETAILS_NOT_FOUND: "Company Details Not Found",
    PROVIDE_COMP_DETAILS: "Please provide company Id",
    EXPENSE_NOT_FOUND: "Expenses not found",
    BILLING_TEMPLATE: "Either currency or Billing Frequency not found",
    PERSON_INCHARGE_DETAILS_NOT_FOUND: "Person Incharge Details Not Found",
    INVALID_CREDENTIALS: "Invalid Credentials"
}

module.exports = {
    ROUTES,
    PARAMS,
    STATUS_CODE,
    ERROR_MESSAGE,
    SUCCESS_MESSAGES
}