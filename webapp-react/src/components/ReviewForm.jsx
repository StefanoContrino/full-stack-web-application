import { useState } from 'react';
import axios from 'axios';


function ReviewForm({ movieId, fetchMovie }) {

    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: ''
    });


    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }


    function handleSubmit(event) {

    event.preventDefault();

    axios.post('/api/reviews', {
        movie_id: movieId,
        ...formData
    })
    .then(response => {

        console.log(response.data);

        setFormData({
            name: '',
            text: '',
            vote: ''
        });

        fetchMovie();

    })
    .catch(error => {
        console.log(error);
    });

}


    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
            />


            <textarea
                name="text"
                placeholder="Recensione"
                value={formData.text}
                onChange={handleChange}
            />


            <input
                type="number"
                name="vote"
                placeholder="Voto"
                value={formData.vote}
                onChange={handleChange}
            />


            <button type="submit">
                Invia recensione
            </button>

        </form>
    );

}


export default ReviewForm;