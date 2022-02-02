const mysql = require("mysql");
const { databaseConfig } = require("./keys");
const { promisify } = require("util");

const pool = mysql.createPool(databaseConfig); // hilos para ejecutar en secuencia simula en prod

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
    connection.release(); // suelto mi conneccion
    console.log("DB IS CONNECTED");
  }
});

pool.query = promisify(pool.query); // returns me my promise for queries that before I give a callback

module.exports = pool;
