const mysql = require('mysql');               // conexion a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin12345',
    port:3308,
    database: 'salud'
});


conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error: '+ err)
    }else{
        console.log('Se ha conectado exitosamente a la base de datos.')
    }
});


module.exports= conexion;