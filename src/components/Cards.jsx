import { Players } from "./Players";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { faUserMinus} from '@fortawesome/free-solid-svg-icons';
import "../main.css"


const Show = (props) =>{
    return(
        <>
        <div className="section__main"><p>Seguidores: {props.count}</p></div>
        </>
    )
}

const Button = (props) =>{
    return(
        <>
        <button className="button__main" onClick={props.onClick}>{<FontAwesomeIcon icon={props.name} />}</button>
        </>
    )
}

const ButtonN = (props) =>{
    return(
        <>
        <button className="button__main" onClick={props.onClick}>{<FontAwesomeIcon icon={props.name} />}</button>
        </>
    )
}


export default function Cards(){

    
const [count, setCount] = useState(0);

const seguir = (id) => setCount(prev => ({...prev, [id]: (prev[id] || 0) +1}))
const seguirn = (id) => setCount(prev => ({...prev, [id]: (prev[id] || 1) -1}))

    const section = Players.map(player => 
        <div key={Players.id} className="card">
        <img src={player.image} alt={player.name} loading="lazy"/>
        <div className="info">
        <h2>{player.name}</h2>
        <p className="card__team">{player.position}{" | "}{ <img src={player.team} alt={player.name} />}</p>
        <p className='desc'>{player.description}</p>
        <div className="section__button">
        <ButtonN name={faUserPlus} onClick={() => seguir(player.id)} />
        <Button name={faUserMinus} onClick={() => seguirn(player.id)}/>
        <Show count={count[player.id] || 0} />
        </div>
        </div>
        </div>
    );

    return(
        <>
        
        <p className="info__main">Los mejores jugadores en la liga en esta sección.</p>
        <div className="grid">
        {section}
        </div>
        </>
    )
}