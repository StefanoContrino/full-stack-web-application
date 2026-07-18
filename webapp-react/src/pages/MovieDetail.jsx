import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';

function MovieDetail() {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    function fetchMovie() {

    axios.get(`/api/movies/${id}`)
        .then(response => {
            setMovie(response.data);
        })
        .catch(error => {
            console.log(error);
        });

}


    useEffect(() => {

    fetchMovie();

}, [id]);


    if (!movie) {
        return <h1>Caricamento...</h1>;
    }


    return (
        <>

            <h1>{movie.title}</h1>

            <p>{movie.description}</p>


            <h2>Recensioni</h2>

            {
                movie.reviews.map(review => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                    />
                ))
            }

            <ReviewForm
                movieId={movie.id}
                fetchMovie={fetchMovie}
            />

        </>
    );

}


export default MovieDetail;