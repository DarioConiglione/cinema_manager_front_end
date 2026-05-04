const ReviewList = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return (
            <div className="alert alert-light border">
                Nessuna recensione per questo film. Sii il primo!
            </div>
        );
    }

    return (
        <div className="mt-4">
            <h4 className="mb-3">Recensioni della Community</h4>
            {reviews.map((rev) => (
                <div key={rev.id} className="card mb-2 border-0 bg-white shadow-sm">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-dark font-weight-bold">
                            👤 {rev.author}
                        </h6>
                        <p className="card-text text-muted small italic">"{rev.content}"</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;