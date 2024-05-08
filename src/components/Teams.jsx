import "../main.css"
import { TeamsCard } from "./TeamsCard"

export default function Teams(){

    const teams = TeamsCard.map(equipos =>
        <div key={TeamsCard.id} className="card__equipos">
            <img src={equipos.team} alt={equipos.name} loading="lazy" />
            <div className="info__equipo">
            <h2>{equipos.name}</h2>
            <p>{equipos.description}</p>
            </div>
        </div>
    )

    return(
        <>
        <p className="info__main teams">Los mejores equipos de la liga en esta sección.</p>
        <div className="grid">
        {teams}
       </div>
        </>
    )
}