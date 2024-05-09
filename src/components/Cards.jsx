import { Players } from "./Players";
import { useState } from "react";
import "../main.css"


export default function Cards(){

    const [count, setCount] = useState(0);

    const seguir = (id) => setCount(prev => ({...prev, [id]: (prev[id] || 0) +1}))

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
            <button className="button__main" onClick={props.onClick}>{props.name}</button>
            </>
        )
    }

    const section = Players.map(player => 
        <div key={Players.id} className="card">
        <img src={player.image} alt={player.name} loading="lazy"/>
        <div className="info">
        <h2>{player.name}</h2>
        <p className="card__team">{player.position}{" | "}{ <img src={player.team} alt={player.name} />}</p>
        <p className='desc'>{player.description}</p>
        <div className="section__button">
        <Button name="Seguir" onClick={() => seguir(player.id)} />
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