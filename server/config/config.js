const sequelize = require("sequelize");
module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "tabtracker",
    user: process.env.DB_USER || "tabtracker",
    password: process.env.DB_PASSWORD || "tabtracker",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      operatorsAliases: sequelize.op,
      storage: "./tabtracker.sqlite"
    }
  }
};