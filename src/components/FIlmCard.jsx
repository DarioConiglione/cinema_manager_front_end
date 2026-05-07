import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {
    return (
        <div
            className="card h-100 shadow-lg border-0 rounded-4"
            style={{ transition: 'transform 0.3s ease', cursor: 'pointer', background: 'linear-gradient(145deg, #1e293b, #0f172a)' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title text-warning fw-bold fs-4">{film.title}</h5>
                <p className="card-text text-light flex-grow-1" style={{ opacity: 0.8 }}>
                    {film.description.substring(0, 100)}...
                </p>
                <Link to={`/film/${film.id}`} className="btn btn-warning mt-4 rounded-pill fw-bold shadow-sm">
                    Scopri di più
                </Link>
            </div>
        </div>
    );
};

export default FilmCard;