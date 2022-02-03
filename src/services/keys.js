module.exports = {
  databaseConfig: {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
  },
  jwt: {
    key: process.env.JWT_PASSWORD
  },
};