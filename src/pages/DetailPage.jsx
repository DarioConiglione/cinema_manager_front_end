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
            <Link to="/" className="btn btn-outline-secondary mb-4">← Torna alla lista</Link>
            <div className="row">
                <div className="col-md-8">
                    <h1>{film.title}</h1>
                    <p className="mt-4" style={{ whiteSpace: 'pre-line' }}>{film.description}</p>
                </div>
                <div className="col-md-4">
                    <div className="card bg-light p-3">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="m-0">Recensioni</h3>
                            <Link to={`/film/${id}/recensione`} className="btn btn-sm btn-primary">Aggiungi</Link>
                        </div>
                        {film.reviews && film.reviews.length > 0 ? (
                            film.reviews.map(rev => (
                                <Review key={rev.id} review={rev} />
                            ))
                        ) : (
                            <p>Nessuna recensione presente.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;