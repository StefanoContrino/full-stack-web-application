const db = require('../db');


function createReview(req, res) {

    const { movie_id, name, text, vote } = req.body;


    const sql = `
        INSERT INTO reviews
        (movie_id, name, text, vote)
        VALUES (?, ?, ?, ?)
    `;


    db.query(
        sql,
        [movie_id, name, text, vote],
        (err, result) => {

            if (err) {

    console.log(err);

    res.status(500).json({
        error: err.message
    });

    return;
}


            res.status(201).json({
                message: 'Recensione creata',
                id: result.insertId
            });

        }
    );

}


module.exports = {
    createReview
};