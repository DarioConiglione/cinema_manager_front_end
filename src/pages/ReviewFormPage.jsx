import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ReviewFormPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = { author, content, rating: Number(rating) };

        fetch(`http://localhost:8080/api/films/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(response => {
                if (response.ok) {

                    navigate(`/film/${id}`);
                } else {
                    console.error("Errore nell'invio della recensione");
                }
            })
            .catch(err => console.error("Errore di rete:", err));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Link to={`/film/${id}`} className="btn btn-outline-secondary mb-4 rounded-pill shadow-sm">← Torna al film</Link>
                    <div className="card shadow border-0 rounded-4 p-4 p-md-5">
                        <h2 className="text-center text-primary fw-bold mb-4">Aggiungi una Recensione</h2>
                        <form onSubmit={handleSubmit} className="mt-2">
                            <div className="mb-4">
                                <label htmlFor="author" className="form-label fw-bold">Nome Autore</label>
                                <input type="text" className="form-control rounded-pill px-3 py-2" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required placeholder="Inserisci il tuo nome" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="rating" className="form-label fw-bold">Voto</label>
                                <select className="form-select rounded-pill px-3 py-2" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} required>
                                    <option value="1">⭐ 1 - Pessimo</option>
                                    <option value="2">⭐⭐ 2 - Scarso</option>
                                    <option value="3">⭐⭐⭐ 3 - Sufficiente</option>
                                    <option value="4">⭐⭐⭐⭐ 4 - Buono</option>
                                    <option value="5">⭐⭐⭐⭐⭐ 5 - Ottimo</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="content" className="form-label fw-bold">Recensione</label>
                                <textarea className="form-control rounded-4 p-3" id="content" rows="4" value={content} onChange={(e) => setContent(e.target.value)} required placeholder="Scrivi qui la tua recensione..."></textarea>
                            </div>
                            <div className="d-grid mt-5">
                                <button type="submit" className="btn btn-primary btn-lg rounded-pill shadow-sm fw-bold">Invia Recensione</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewFormPage;