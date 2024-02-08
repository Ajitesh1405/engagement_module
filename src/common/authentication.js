const jwt = require('jsonwebtoken');
const ENV_VAR = require('../common/envConfig')
const EmpMaster = require('../models/empMaster');

class Authorization {
  constructor() { }
  async authFunction(req, res) {
    try {
        const auth_token = req.headers.authorization || req.headers.Authorization;
        console.log("token", auth_token);
        if (!auth_token) {
            throw new Error ("Auth-Token is missing.");
        }
        
      // await Utility.validateToken(auth_token);
      const payload = jwt.verify(
        auth_token,
        ENV_VAR.JWTKey
      );

      const user = payload.email
      const domainId = EmpMaster.findOne({
        where: { email: user },
        raw: true
      })

      if(!domainId){
        throw new Error("User not verified")
      }
      return domainId;
    } catch (error) {
      console.log('Token not found:: ', error);
      // res.status(STATUS_CODES.BAD_REQUEST).send({
      //   message: error.message || `${ERROR_MSG.UNAUTHORIZE_ACCESS} .`,
      // });
    }
  }

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
