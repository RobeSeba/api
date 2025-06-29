const db = require('../database/conexion.js');

class estudiantesController{
    constructor() {

    }
    consultar(req, res){
       try {
        db.query('select * from estudiantes',
            (error,rows)=>{
                if(error){
                    res.status(400).send(error.message);
                }
                res.status(200).json({
                    data: rows
                });
            }
        )
       } catch (error) {
         res.status(500).send(error.message); 
       }
    }

    consultarDetalle(req, res){
        const {id} = req.params;
        try {
            db.query('select * from estudiantes where id = ?',[id],
                (error, rows) => {
                    if (error) {
                        return res.status(400).send(error.message);
                    }
                    res.status(200).json(rows[0]);
                }

            )

        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    Ingresar(req, res){
        try {
            const {dni, nombre, apellido, email} = req.body;
            db.query(`INSERT INTO cursos.estudiantes (dni, nombre, apellido, email) VALUES ( ?,?, ?, ?);`,
                [dni,nombre,apellido,email],
                (error, row) => {
                    if (error) {
                        return res.status(400).send(error.message);
                    }
                    res.status(201).json({
                        message: 'Estudiante creado exitosamente',
                        id: row.insertId
                    });
                }
            );
        } catch (error) {
           res.status(500).send(error.message); 
        }
    }
    actualizar(req,res){
        const {id} = req.params
        try {
            const {dni, nombre, apellido, email} = req.body;
            db.query(`UPDATE cursos.estudiantes SET dni=?, nombre = ?, apellido = ?, email = 
                ? WHERE (id =?);`,[dni, nombre, apellido,email,id],
                (error,rows)=>{
                    if(error){
                        return res.status(400).send(error.message);
                    }

                    if(rows.affectedRows === 1){
                        res.status(200).json({
                            message: 'Estudiante actualizado exitosamente',
                        });    
                    }
                }
            )
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
    borrar(req, res){
        const {id} = req.params;
        db.query('DELETE FROM estudiantes WHERE id = ?',[id],
            (error, rows) => {
                if (error) {
                    return res.status(400).send(error.message);
                }
                if (rows.affectedRows === 1) {
                    res.status(200).json({
                        message: 'Estudiante eliminado exitosamente',
                    });
                } else {
                    res.status(404).json({
                        message: 'Estudiante no encontrado',
                    });
                }
            }
        );
    }
}

module.exports = new estudiantesController();