const express = require('express');
const app = express();
const mysql = require('mysql2'); // for mysql 8.0 and above
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abc#123',
    database: 'employee_system'
});

app.post('/create', (req, res) => {
    const { name, age, country, position, wage } = req.body;
    // const emtable = db.getTable('employee');
    db.query('INSERT INTO employee (name, age, country, position, wage) VALUES (?,?,?,?,?)', 
        [name, age, country, position, wage],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send('Values Inserted');
            }
        }
    );
});

app.listen(3001, () => {
  console.log('server started');
});