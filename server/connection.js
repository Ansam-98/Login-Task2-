const {Client} = require('pg')

const client = new Client({
    host : "localhost",
    port : 5432,
    user : "postgres",
    password : "postgres123",
    database : "postgres"
    
})




module.exports = client