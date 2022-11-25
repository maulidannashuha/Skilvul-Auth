// import sequelize
// import { Sequelize } from "sequelize";
const {Sequelize} = require('sequelize')

// create connection
const db = new Sequelize({
  "dialect": "sqlite",
  "storage": "data/database.sqlite"
});

// export connection
module.exports = {
  db
}
