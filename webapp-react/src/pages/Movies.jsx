import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCard from '../components/MovieCard';


function Movies() {

    const [movies, setMovies] = useState([]);


    useEffect(() => {

        axios.get('/api/movies')
            .then(response => {
                console.log(response.data);
                setMovies(response.data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);


    return (
        <>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <table className="table text-center my-5">

                            <thead>
                                <tr>
                                    <th><h1>Lista Film</h1></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>

                                    <td>
                                        {
                                            movies.map(movie => (
                                                <MovieCard
                                                    key={movie.id}
                                                    movie={movie}
                                                />
                                            ))
                                        }
                                    </td>


                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>





        </>
    );

}


export default Movies;