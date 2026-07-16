const db = require('./db');
const express = require("express");

const app = express();

const port = 3000;

app.get('/movies', (req, res) => {

    const sql = 'SELECT * FROM movies';

    db.query(sql, (err, results) => {

        if (err) {
            res.status(500).json({
                error: 'Database error'
            });
            return;
        }

        res.json(results);
    });

});

app.get('/movies/:id', (req, res) => {

    const movieId = req.params.id;

    const sqlMovie = `
        SELECT *
        FROM movies
        WHERE id = ?`;

    db.query(sqlMovie, [movieId], (err, movieResults) => {

        if (err) {
            res.status(500).json({
                error: 'Database error'
            });
            return;
        }


        const sqlReviews = `
            SELECT *
            FROM reviews
            WHERE movie_id = ?
        `;


        db.query(sqlReviews, [movieId], (err, reviewsResults) => {

            if (err) {
                res.status(500).json({
                    error: 'Database error'
                });
                return;
            }


            const movie = movieResults[0];

            movie.reviews = reviewsResults;


            res.json(movie);

        });

    });

});


app.listen(port, () => {
    console.log(`Server avviato sulla porta ${port}`);
});