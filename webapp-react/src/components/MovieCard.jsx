import { Link } from 'react-router-dom';

function MovieCard({ movie }) {

    return (
        <div>
            <h2>{movie.title}</h2>

            <p>{movie.description}</p>

            <Link to={`/movies/${movie.id}`}>
                Dettaglio
            </Link>

        </div>
    );

}

export default MovieCard;