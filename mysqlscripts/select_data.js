const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})

connection.query(
    `SELECT * FROM persons`,
    function(err, results, cols){
        if(err){
            console.error(err)
        }else{
            console.log(results)
            console.log(cols)
        }
        connection.close();
    }
)