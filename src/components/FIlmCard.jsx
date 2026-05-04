import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {
    return (
        <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{film.title}</h5>
                <p className="card-text text-muted flex-grow-1">
                    {film.description.substring(0, 100)}...
                </p>
                <Link to={`/film/${film.id}`} className="btn btn-outline-primary mt-3">
                    Scopri di più
                </Link>
            </div>
        </div>
    );
};

export default FilmCard;