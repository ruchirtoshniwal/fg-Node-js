/*var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: '',      // Replace with your database password
  database: 'my-node' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn; */

const { Client } = require('pg')
const client = new Client({
  user: 'qlyntryrsuluoo',
  host: 'ec2-44-205-41-76.compute-1.amazonaws.com',
  database: 'd5ris2eu6f552l',
  password: 'a7dd448e0b1a13c5117221e39127b7adad22daae56b4e6d231c9221687f5b572',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});