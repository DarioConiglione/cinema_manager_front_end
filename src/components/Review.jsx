const Review = ({ review }) => {
    return (
        <div className="border-bottom py-2">
            <strong>{review.author}</strong>
            <p className="mb-0 text-muted">{review.content}</p>
        </div>
    );
};

export default Review;