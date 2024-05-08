import "../main.css";
import { DraftCard } from "./DraftCard";

export default function Draft() {
    const drafts = DraftCard.map((equipos) => (
        <div key={equipos.id} className="card__drafts">
            <img src={equipos.team} alt={equipos.name} loading="lazy" />
            <div className="info__equipo">
                <h2>{equipos.name}</h2>
                <p>{equipos.description}</p>

                <div className="selecciones">
                    {equipos.selecciones.map((selection, index) => (
                        <div key={index}>
                            {selection.selection ? (
                                <div className="selected">{selection.position}</div>
                            ) : (
                                <div className="selec">{selection.position}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <p className="info__main teams">Los mejores drafts en esta sección.</p>
            <div className="grid">{drafts}</div>
        </>
    );
}