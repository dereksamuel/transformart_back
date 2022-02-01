const mysql = require("mysql");
const { database } = require("./keys");
const { promisify } = require("util");

const pool = mysql.createPool(database); // hilos para ejecutar en secuencia

pool.getConnection((error, connection) => {
  if (error) {
    switch (error.code) {
      case "PROTOCOL_CONNECTION_LOST":
        console.error("The connection was did lost", error.message);
        break;

      case "ERR_CON_COUNT_ERROR":
        console.error("Database has to many connections", error.message);
        break;

      case "ECONNREFUSED":
        console.error("Database connection was refused", error.message);
        break;

      default:
        console.error(error);
        break;
    }
  }

  if (connection) {
    connection.release();
    console.log("DB IS CONNECTED");
  }
});

pool.query = promisify(pool.query);

module.exports = pool;
