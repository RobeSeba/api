const db = require('../database/conexion.js');



class CursosController{
    constructor() {

    }
    consultar(req, res){
       res.json({message:'consultar cursos'});
    }

    consultarDetalle(req, res){
        const {id} = req.params;
        res.json({message:`consulta crusos con id : ${id}`});
    }
    Ingresar(req, res){
        res.json({message:'ingreso cursos'});
    }
    actualizar(req,res){
        res.json({message:`actualizacion crusos con id `});
    }
    borrar(req, res){
        res.json({message:`eliminacion crusos con id `});
    }
}

module.exports = new CursosController();