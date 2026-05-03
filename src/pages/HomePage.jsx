import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        // Chiamata al tuo backend Spring
        fetch('http://localhost:8080/api/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(err => console.error("Errore nel caricamento film:", err));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Catalogo Cinema</h1>
            <div className="row">
                {films.map(film => (
                    <div key={film.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <p className="card-text text-truncate">{film.description}</p>
                                <Link to={`/film/${film.id}`} className="btn btn-primary">
                                    Vedi Dettagli
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;