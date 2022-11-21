// importing pg library ofr postgres use
const { Pool } = require('pg')
const pool = new Pool(
    // The below object of environment variables is acceptable, however, pg knows to look for them in the .env file
    // {
    // user: process.env.PGUSER,
    // host: process.env.PGHOST,
    // database: process.env.PGDATABASE,
    // password: process.env.PGPASSWORD,
    // port: process.env.PGPORT,
    // }
)
module.exports = {
  query: (text, params) => pool.query(text, params),
};  // create new pool instance and pass an object, hence use of curly brackets, to pass the values
module.exports = {
  query: (text, params) => pool.query(text, params),
};

