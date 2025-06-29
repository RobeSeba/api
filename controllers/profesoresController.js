const db = require('../database/conexion.js');


class profesoresController{
    constructor() {

    }
    consultar(req, res){
       res.json({message:'consulta profesores'});
    }

    consultarDetalle(req, res){
        res.json({message:`consulta profesor con id `});
    }
    Ingresar(req, res){
        res.json({message:'ingreso profesores'});
    }
    actualizar(req,res){
        res.json({message:`actualizacion profesor con id `});
    }
    borrar(req, res){
        res.json({message:`eliminacion profesor con id `});
    }
}

module.exports = new profesoresController();