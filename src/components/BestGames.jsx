import { useState } from "react";
import { BestGame } from "./BestGame";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';


import '../main.css'

export default function BestGames(){

    const [index, setIndex] = useState(0);

    let siguiente = index < BestGame.length -1;
    let anterior = index > 0;

    function handleClick(){
        if(siguiente){
            setIndex(index + 1)
    }
    }

    function handleClickAnt(){
       if(anterior){
        setIndex(index - 1)
       }
    }

    let players = BestGame[index];

    return(
        <>
        <p className="info__main teams">Las mejores imagenes de tus jugadores favoritos.</p>
        <div className="card__images">
        <img src={players.image} alt="img" className="image__card" loading="lazy"/>
        <button className="anterior" onClick={handleClickAnt} hidden={!anterior}><FontAwesomeIcon icon={faArrowLeft} /></button>
        <button className="siguiente" onClick={handleClick} hidden={!siguiente}><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        </>
    )
}