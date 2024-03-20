/* */
require('dotenv').config();
//console.log(process.env);
const express = require('express');
const cors = require('cors');
//const { Pool }= require('pg');
const{todoRouter}=require('./routes/todo.js');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', todoRouter);
const port = process.env.PORT;


/*app.get('/', (req, res) => {
	  const pool=openDb()
	pool.query('SELECT * FROM task', (error, result) => {
		if (error) {
			res.status(500).json({ error: error.message });
		} 
	
	res.status(200).json(result.rows)
	});
})
app.post("/new", (req, res) => {
    const pool = openDb();
    pool.query('insert into task (description) values ($1) returning *', 
    [req.body.description], 
    (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json({ id: result.rows[0].id });
        }
    });
});

app.delete("/delete/:id", async (req, res) => {
    const pool = openDb()
    const id = parseInt(req.params.id)
    pool.query('delete from task where id = $1', 
        [id], 
        (error, result) => {
            if (error) {
                res.status(500).json({error: error.message})
            } else {
                res.status(200).json({id:id})
            }
        }
    )
})
*/

/*const openDb = ()  => {
	const pool = new Pool({
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		database: process.env.DB_DATABASE,
		password: process.env.DB_PASSWORD,
		port: process.env.DB_PORT
	});
	return pool
}*/
app.listen(port);
