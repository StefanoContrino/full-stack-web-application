const db = require('../db');


function getMovies(req, res) {

    const sql = 'SELECT * FROM movies';

    db.query(sql, (err, results) => {

        if (err) {
            res.status(500).json({
                error: 'Errore database'
            });
            return;
        }

        res.json(results);

    });

}


function getMovie(req, res) {

    const movieId = req.params.id;

    const sqlMovie = `
        SELECT *
        FROM movies
        WHERE id = ?
    `;


    db.query(sqlMovie, [movieId], (err, movieResults) => {

        if (err) {
            res.status(500).json({
                error: 'Errore database'
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
                    error: 'Errore database'
                });
                return;
            }


            const movie = movieResults[0];

            movie.reviews = reviewsResults;


            res.json(movie);

        });

    });

}


module.exports = {
    getMovies,
    getMovie
};