const Sequelize = require('sequelize');
const ENV_VAR = require('../common/Config')


const sequelize = new Sequelize(ENV_VAR.dbName, ENV_VAR.dbUser, ENV_VAR.dbPass, {
    host: ENV_VAR.dbHost,
    dialect: 'mssql',
    port: ENV_VAR.PORT,
    dialectOptions: {
        instanceName: 'SQLEXPRESS',
        options: { encrypt: false },
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