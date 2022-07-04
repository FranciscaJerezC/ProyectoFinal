const router = require('express').Router();
const conexion = require('./config/conexion');


//asignamos las rutas
router.get('/',(req,res)=>{
    
    let sql = 'select * from usuarios'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});


//get un usuario con rut como pk
router.get('/:rut',(req,res)=>{
    const{rut} = req.params
    let sql = 'select * from usuarios where rut = ?'
    conexion.query(sql,[rut],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});


//agregar usuario
router.post('/',(req, res)=>{
    const{rut, nombres, apellidos,correo, contrasena, pregunta, respuesta} = req.body;
    let sql = `insert into usuarios(rut, nombres, apellidos, correo, contrasena, pregunta, respuesta) 
                values('${rut}', '${nombres}', '${apellidos}', '${correo}', md5('${contrasena}'), '${pregunta}', md5('${respuesta}'))`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario agregado' })
        }
    })
})


//eliminar usuario para rol de admin
router.delete('/:rut',(req, res)=>{
    const{rut} = req.params

    let sql = `delete from usuarios where rut = '${rut}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario eliminado'})
        }
    })
})


//login con algoritmo de reducción criptográfico  md5
router.get('/login/:rut/:contrasena',(req,res)=>{
    const rut=req.params.rut
    const contrasena=req.params.contrasena
    conexion.query("SELECT * FROM usuarios where rut=? and contrasena=md5(?)",[rut,contrasena],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//recuperar contraseña
router.get('/recuperar/:rut/:respuesta',(req,res)=>{
    const rut= req.params.rut
    const respuesta= req.params.respuesta
    conexion.query("SELECT * FROM usuarios where rut=? and respuesta=md5(?)", [rut,respuesta], (err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//cambiar contraseña, es decir, modificar usuario 
router.put('/cambiarContra/:rut',(req,res)=>{
    const {rut}= req.params
    const {respuesta}=req.body
    conexion.query(`update usuarios set contrasena = md5('${respuesta}') where rut = '${rut}'`, (err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'contrasena modificada'})
        }
    })
 
})






module.exports = router