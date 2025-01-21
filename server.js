const express = require('express');
const db = require('./db');
const app = express();

const PORT = process.env.PORT || 3000;

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

app.get('/', (req, res) => {
    res.send('Welcome to my hotel... ');
});
// import routes files

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuItemRoutes');


// use routes

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});