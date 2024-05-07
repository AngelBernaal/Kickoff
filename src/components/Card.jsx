import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import "../main.css"

export default function Card({image, name, position, team, description}){
    return(
        <>
        <div className="card">
        <img src={image} alt={name} />
        <div className="info">
        <div className="action">
            <h2>{name}</h2>
            <button><FontAwesomeIcon icon={faUserPlus} /></button>
            <div className='seg'><p>Seguidores: </p></div>
        </div>
        <p className="card__team">{position}{" | "}{ <img src={team} alt={name} />}</p>
        <p className='desc'>{description}</p>
        </div>
        </div>
        </>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };