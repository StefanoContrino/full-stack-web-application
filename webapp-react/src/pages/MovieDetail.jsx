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

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <table className="table text-center my-5">

                            <thead>
                                <tr>
                                    <th>
                                        <h1>{movie.title}</h1>
                                        <p>{movie.description}</p>
                                    </th>

                                    <th><h2>Recensioni</h2></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td></td>

                                    <td>
                                        {
                                            movie.reviews.map(review => (
                                                <ReviewCard
                                                    key={review.id}
                                                    review={review}
                                                />
                                            ))
                                        }
                                    </td>


                                </tr>
                            </tbody>

                            <ReviewForm
                                movieId={movie.id}
                                fetchMovie={fetchMovie}
                            />

                        </table>
                    </div>
                </div>
            </div>













        </>
    );

}


export default MovieDetail;