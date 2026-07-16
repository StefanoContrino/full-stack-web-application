function ReviewCard({ review }) {

    return (
        <div>

            <h3>{review.author}</h3>

            <p>Voto: {review.vote}</p>

            <p>{review.text}</p>

        </div>
    );

}


export default ReviewCard;