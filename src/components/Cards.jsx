import { Players } from "./Players";
import "../main.css"

export default function Cards(){

    const section = Players.map(player => 
        <div key={Players.id} className="card">
        <img src={player.image} alt={player.name} />
        <div className="info">
        <h2>{player.name}</h2>
        <p className="card__team">{player.position}{" | "}{ <img src={player.team} alt={player.name} />}</p>
        <p className='desc'>{player.description}</p>
        </div>
        </div>
    );

    return(
        <>

        <div className="image">
            <h1>Kickoff<span>!</span></h1>
            <img src="/images/icon.png" alt="icono" />
        </div>

        <div className="grid">
        {section}
        </div>
        </>
    )
}