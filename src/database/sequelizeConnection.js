const Sequelize = require('sequelize');
const ENV_VAR = require('../common/envConfig')


const sequelize = new Sequelize(ENV_VAR.dbName, ENV_VAR.dbUser, ENV_VAR.dbPass, {
    host: 'vm1',
    dialect: 'mssql',
    dialectOptions: {
        instanceName: 'SQLEXPRESS',
    },
    
});

  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  
module.exports = sequelize