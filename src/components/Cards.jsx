import Card from "./Card";
import "../main.css"

export default function Cards(){
    return(
        <>

        <div className="image">
            <h1>Kickoff<span>!</span></h1>
            <img src="../../public/images/icon.png" alt="icono" />
        </div>

        <div className="grid">
        <Card 
        image="../../public/images/1.jpg"
        name="Patrick Mahomes"
        position="QB"
        team="../../public/images/kansascity.png"
        description="Con su habilidad para lanzar pases precisos y su capacidad para improvisar, Mahomes ha demostrado ser uno de los mejores quarterbacks de la liga."
        />

        <Card 
        image="../../public/images/2.jpg"
        name="Joe Burrow"
        position="QB"
        team="../../public/images/bengals.png"
        description="Su habilidad para leer las defensas y su precisión en el pase lo convierten en uno de los quarterbacks más emocionantes de la liga."
        />

        <Card 
        image="../../public/images/3.jpg"
        name="Josh Allen"
        position="QB"
        team="../../public/images/bills.png"
        description="Su capacidad para lanzar pases profundos y correr el balón lo hace una amenaza constante para las defensas rivales."
        />

        <Card 
        image="../../public/images/4.jpg"
        name="Justin Jefferson"
        position="WR"
        team="../../public/images/vikings.png"
        description="Su habilidad para crear separación y atrapar pases difíciles lo convierte en uno de los receptores más prometedores de la liga. "
        />

        <Card 
        image="../../public/images/5.jpg"
        name="Christian McCaffrey"
        position="RB"
        team="../../public/images/niners.png"
        description="Con una combinación única de velocidad, agilidad y visión en el campo, McCaffrey es una pieza clave."
        />
        </div>
        </>
    )
}