// Home.js
import React from 'react'
import Carousel from "../components/Carousel";
import Imagen from "../img/fondo-carrousel-1.jpg";
import Imagen2 from "../img/fondo-carrousel-2.jpg";
import Imagen3 from "../img/fondo-carrousel-3.jpg";

function Home() {
    return (
        <>
            <div>
                <Carousel imagen={Imagen} imagen2={Imagen2} imagen3={Imagen3} />
            </div>
        </>
    )

}
export default Home;