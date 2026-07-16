import MovieCard from '../components/MovieCard';


function Movies() {

    const movies = [
        {
            id: 1,
            title: 'Interstellar',
            description: 'Un viaggio nello spazio e nel tempo'
        },
        {
            id: 2,
            title: 'Inception',
            description: 'Un ladro entra nei sogni delle persone'
        },
        {
            id: 3,
            title: 'Matrix',
            description: 'Una realtà nascosta dietro il mondo conosciuto'
        }
    ];


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