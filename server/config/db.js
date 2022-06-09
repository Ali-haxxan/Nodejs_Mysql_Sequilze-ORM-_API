const { Sequelize } = require('sequelize');


// Option 3: Passing parameters 
const sequelize = new Sequelize('sequelize', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});