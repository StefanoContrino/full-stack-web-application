const db = require('./db');
const express = require("express");
const movieRoutes = require('./routes/movieRoutes');

const app = express();

const port = 3000;

app.use('/movies', movieRoutes);

app.listen(port, () => {
    console.log(`Server avviato sulla porta ${port}`);
});