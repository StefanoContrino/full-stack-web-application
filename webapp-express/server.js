const db = require('./db');
const express = require("express");
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

const port = 3000;

app.use(express.json());
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(port, () => {
    console.log(`Server avviato sulla porta ${port}`);
});