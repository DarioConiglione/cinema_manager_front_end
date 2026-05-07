import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Review from '../components/Review';

function DetailPage() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/films/${id}`)
            .then(response => response.json())
            .then(data => setFilm(data))
            .catch(err => console.error("Errore:", err));
    }, [id]);

    if (!film) return <div className="text-center mt-5 small">Caricamento...</div>;

    return (
        <div className="container mt-5">
            <Link to="/" className="btn btn-outline-secondary mb-4 rounded-pill shadow-sm">← Torna alla lista</Link>
            <div className="row bg-white shadow-sm p-4 rounded-4 mb-5">
                <div className="col-md-7 mb-4 mb-md-0">
                    <h1 className="text-primary fw-bold display-5">{film.title}</h1>
                    <p className="mt-4 fs-5 text-muted" style={{ whiteSpace: 'pre-line' }}>{film.description}</p>
                </div>
                <div className="col-md-5">
                    <div className="card border-0 shadow rounded-4 p-4 bg-light h-100">
                        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                            <h3 className="m-0 fw-bold text-dark">Recensioni</h3>
                            <Link to={`/film/${id}/recensione`} className="btn btn-sm btn-primary rounded-pill px-3 shadow-sm">✏️ Aggiungi</Link>
                        </div>
                        {film.reviews && film.reviews.length > 0 ? (
                            film.reviews.map(rev => (
                                <Review key={rev.id} review={rev} />
                            ))
                        ) : (
                            <div className="text-center text-muted mt-3">
                                <p>Nessuna recensione presente.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;