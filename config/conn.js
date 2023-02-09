const { Sequelize } = require('sequelize');

const dbconfig = new Sequelize('sql6596961', 'sql6596961', 'l3mmue5jre', {
    host: 'sql6.freemysqlhosting.net',
    dialect: 'mysql'
  });

  try {
    dbconfig.authenticate();
    console.log('Connection has been established successfully.');   //tes koneksi
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = dbconfig;
