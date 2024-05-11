import { Players } from "./Players";
import "../main.css"


export default function Cards(){

    const section = Players.map((player) => 
        <div key={player.id} className="card">
        <img src={player.image} alt={player.name} loading="lazy"/>
        <div className="info">
        <h2>{player.name}</h2>
        <p className="card__team">{player.position}{" | "}{ <img src={player.team} alt={player.name} />}</p>
        <p className='desc'>{player.description}</p>
        <div className="section__button">
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