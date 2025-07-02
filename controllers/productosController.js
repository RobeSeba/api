
const db = require('../database/conexion.js');
class ProductoController {

    consultar(req, res) {

        try {
            db.query('select * from productos',
                (error, rows) => {
                    if (error) {
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

    consultarDetalle(req, res) {
        const { id } = req.params;
        try {
            db.query('select * from productos where id = ?', [id],
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

    agregar(req, res) {
        try {
            const { nombre, cantidad, precio } = req.body;
            db.query(`INSERT INTO cursos.productos ( nombre, cantidad, precio) VALUES ( ?, ?, ?);`,
                [nombre, cantidad, precio],
                (error, row) => {
                    if (error) {
                        return res.status(400).send(error.message);
                    }
                    res.status(201).json({
                        message: 'producto creado exitosamente',
                        id: row.insertId
                    });
                }
            );
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    actualizar(req, res) {
        const { id } = req.params
        try {
            const { nombre, cantidad, precio } = req.body;
            db.query(`UPDATE cursos.productos SET dni=?, nombre = ?, apellido = ?, email = 
                ? WHERE (id =?);`, [nombre, cantidad, precio, id],
                (error, rows) => {
                    if (error) {
                        return res.status(400).send(error.message);
                    }

                    if (rows.affectedRows === 1) {
                        res.status(200).json({
                            message: 'producto actualizado exitosamente',
                        });
                    }
                }
            )
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    eliminar(req, res) {
        const { id } = req.params;
        db.query('DELETE FROM productos WHERE id = ?', [id],
            (error, rows) => {
                if (error) {
                    return res.status(400).send(error.message);
                }
                if (rows.affectedRows === 1) {
                    res.status(200).json({
                        message: 'producto eliminado exitosamente',
                    });
                } else {
                    res.status(404).json({
                        message: 'producto no encontrado',
                    });
                }
            }
        );
    }

}

module.exports = new ProductoController();