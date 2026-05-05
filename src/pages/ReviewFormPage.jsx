import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ReviewFormPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = { author, content };

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
            <Link to={`/film/${id}`} className="btn btn-outline-secondary mb-4">← Torna al film</Link>
            <h2>Aggiungi una Recensione</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Autore</label>
                    <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Recensione</label>
                    <textarea className="form-control" id="content" rows="4" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Invia</button>
            </form>
        </div>
    );
};

export default ReviewFormPage;