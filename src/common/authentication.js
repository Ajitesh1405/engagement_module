const jwt = require('jsonwebtoken');
const ENV_VAR = require('../common/envConfig')
const EmpMaster = require('../models/empMaster');

class Authorization {
  constructor() { }
  
  async generateJwtToken(user){
    const userJwt = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        ENV_VAR.JWTKey,
        { expiresIn: '10m'}
    );
    return userJwt;
  }

}

module.exports = Authorization;
