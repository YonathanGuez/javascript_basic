require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = {
    query: (text, params, callback) => {
        const start = Date.now()
        return pool.query(text, params, (err, res) => {
          const duration = Date.now() - start
          console.log('executed query', { text, duration, rows: res.rowCount })
          callback(err, res)
        })
    },
}