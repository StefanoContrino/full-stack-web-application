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

            <h1>Lista Film</h1>

            {
                movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))
            }

        </>
    );

}


export default Movies;