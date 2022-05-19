import * as mysql from 'mysql2/promise';
import 'dotenv/config'

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

export default connection;