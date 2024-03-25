const express = require('express');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000; // Change this to your desired port

app.use('/images', express.static(path.join(__dirname, 'images')));

// enabling CORS for some specific origins only.
let corsOptions = {
    origin : 'http://localhost:5173'
}

app.use(cors(corsOptions))

// MySQL Connection Configuration
const connection = mysql.createConnection({
    host: 'localhost', // Change this to your MySQL host
    user: 'root', // Change this to your MySQL username
    password: '', // Change this to your MySQL password
    database: 'traveling-blog' // Change this to your MySQL database name
});

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.get('/',(req, res) => {
    res.json("welcome to our server")
});

// Route to get blogs
app.get('/blogs', (req, res) => {
    const sql = 'SELECT * FROM blogs'; // Assuming your table name is 'blogs'

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Failed to fetch blogs' });
            return;
        }

        res.json(results);
    });
});

// Route to get a specific blog by slug
app.get('/blogs/:slug', (req, res) => {
    const slug = req.params.slug;
    const sql = 'SELECT * FROM blogs WHERE slug = ?';

    connection.query(sql, [slug], (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Failed to fetch blog' });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Blog not found' });
            return;
        }

        res.json(results[0]); // Assuming only one blog matches the slug
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
