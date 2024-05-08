import { useState } from "react";
import { BestGame } from "./BestGame";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';


import '../main.css'

export default function BestGames(){

    const [index, setIndex] = useState(0);

    function handleClick(){
        if(index < BestGame.length -1){
            setIndex(index + 1)
    }
    }

    function handleClickAnt(){
       if(index > 0){
        setIndex(index - 1)
       }
    }

    let players = BestGame[index];

    return(
        <>
        <p className="info__main teams">Las mejores imagenes de tus jugadores favoritos.</p>
        <div className="card__images">
        <img src={players.image} alt="img" className="image__card" />
        <div className="botones">
        <button onClick={handleClickAnt}><FontAwesomeIcon icon={faArrowLeft} /></button>
        <button onClick={handleClick}><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        </div>
        </>
    )
}