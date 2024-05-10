import { Song } from "./Songs"
import '../main.css'

export default function Songs(){

    const cancion = Song.map(song => (
        <div key={song.id} className='card__music'>
            <div className="info__music">
            <img src={song.img} alt={song.name} loading='lazy' />
            <div className="info__song">
                <p>{song.name}</p>
                <p>{song.artista}</p>
            </div>
            </div>
                
            <div className="links__music">
                    {
                        song.enlaces.map(lista =>(
                            <a href={lista.link} key={lista.id} target="_blank"><img className="link__music" src={lista.boton} /></a>
                        ))
                    }
            </div>
        </div>
    ))

    return(
        <>
        <p className="info__main teams">Las álbumes mas eschuchados por tus jugadores favoritos.</p>
        <div className="grid">{cancion}</div>
        </>
    )
}