require('dotenv').config();

const ENV_VAR = {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    PORT: process.env.PORT,
    JWTKey: process.env.JWT_KEY
}

module.exports = ENV_VAR
