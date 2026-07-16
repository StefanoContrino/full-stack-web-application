const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'movies_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Errore connessione database:', err.message);
        return;
    }

    console.log('Database collegato correttamente!');
});

module.exports = connection;