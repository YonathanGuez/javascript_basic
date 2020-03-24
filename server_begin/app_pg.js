//lib 
const {Pool,Client} = require("pg")
//dotenv ==> process.env.Database_url
require('dotenv').config()

//config 
const connectionString = process.env.DATABASE_URL ;
const client = new Client({
    connectionString:connectionString
});
client.connect();

// query 
client.query('SELECT id, name from company',(err,res)=>{
    console.log(err,res)
   // client.end()
})
const data = {id: 6, name: 'jazz'};
console.log(data.id +": "+data.name)

client.query("INSERT INTO company(id, name) values($1, $2)",[data.id, data.name],(err,res)=>{
    console.log(err,res)
    client.end()
})