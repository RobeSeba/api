const mysql = require('mysql2');
const db = mysql.createConnection({
    host: '18.216.64.82',
    port: 3306,
    user: 'usuario_prueba',
    password: 'admin123', 
    database: 'cursos',
});

// const db = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root', 
//     database: 'cursos',
// });

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});
module.exports = db;
