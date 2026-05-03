import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailPage() {
    const { id } = useParams(); // Prende l'ID dall'URL (es: /film/5)
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
                        <h3>Recensioni</h3>
                        {film.reviews && film.reviews.length > 0 ? (
                            film.reviews.map(rev => (
                                <div key={rev.id} className="border-bottom py-2">
                                    <strong>{rev.author}</strong>
                                    <p className="mb-0 text-muted">{rev.content}</p>
                                </div>
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