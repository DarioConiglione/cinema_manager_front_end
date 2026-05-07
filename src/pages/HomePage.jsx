import { useState, useEffect } from 'react';
import FilmCard from '../components/FilmCard'; // Importiamo il componente

const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/films')
            .then(res => res.json())
            .then(data => {
                setFilms(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-5"><h3>Caricamento catalogo...</h3></div>;

    return (
        <div className="container">
            <header className="py-5 text-center bg-primary text-white rounded-4 shadow-sm mb-5 mt-3" style={{ background: 'linear-gradient(45deg, #0d6efd, #6610f2)' }}>
                <h1 className="display-4 fw-bold">Benvenuti al Cinema React</h1>
                <p className="lead">Esplora i film e leggi le recensioni dei nostri utenti.</p>
            </header>

            {films.length === 0 ? (
                <div className="text-center text-muted fs-5">Il catalogo è attualmente vuoto.</div>
            ) : (
                <div className="row">
                    {films.map(film => (
                        <div key={film.id} className="col-md-4 mb-4">
                            <FilmCard film={film} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;