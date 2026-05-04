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
            <header className="py-5 text-center">
                <h1 className="display-4 font-weight-bold">Benvenuti al Cinema React</h1>
                <p className="lead text-muted">Esplora i film e leggi le recensioni dei nostri utenti.</p>
            </header>

            {films.length === 0 ? (
                <div className="text-center">Il catalogo è attualmente vuoto.</div>
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