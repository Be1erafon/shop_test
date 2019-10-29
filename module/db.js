const Sequelize = require('sequelize'); 

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  });

const Shop = sequelize.define('shopping_list', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.NUMBER,
  description: Sequelize.NUMBER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
 {
    freezeTableName: true,
    timestamps: true
  }
  );

module.exports = { sequelize, Shop }

