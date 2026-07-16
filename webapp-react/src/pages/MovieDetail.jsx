import { useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

function MovieDetail() {

    const { id } = useParams();


    const movie = {
        id: id,
        title: 'Interstellar',
        description: 'Un viaggio nello spazio e nel tempo'
    };

    const reviews = [
    {
        id: 1,
        author: 'Mario',
        vote: 5,
        text: 'Film incredibile'
    },
    {
        id: 2,
        author: 'Anna',
        vote: 4,
        text: 'Molto interessante'
    }
];


    return (
        <>

            <h1>{movie.title}</h1>

            <p>{movie.description}</p>

            <p>ID film: {movie.id}</p>

            <h2>Recensioni</h2>

                {
                    reviews.map(review => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                        />
                    ))
                }

        </>
    );

}


export default MovieDetail;