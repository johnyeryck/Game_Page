const {Poll} = require('pg') 
const Poll = new Poll({
    host : 'localhost',
    port : 5432,
    user : 'johny',
    password : '1234',
    database : 'localhost'
})
module.exports = Poll