const Review = ({ review }) => {
    return (
        <div className="bg-white p-3 rounded-3 shadow-sm mb-3 border-start border-4 border-warning">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <strong className="text-dark">{review.author}</strong>
                {review.rating && (
                    <span className="badge bg-warning text-dark rounded-pill">Voto: {review.rating}/5</span>
                )}
            </div>
            <p className="mb-0 text-secondary">{review.content}</p>
        </div>
    );
};

export default Review;