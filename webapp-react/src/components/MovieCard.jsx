import { Link } from 'react-router-dom';
import '../index.css'

function MovieCard({ movie }) {

    return (
        <div>
            <h2>{movie.title}</h2>

            <p>{movie.description}</p>

            <Link className="btn btn-style" to={`/movies/${movie.id}`}>
                Details
            </Link>

        </div>
    );

}

export default MovieCard;