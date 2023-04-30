// Home.js
import React from 'react'
import './style.css'
import Carousel from "../components/Carousel";
import Imagen from "../img/wallpaperflare.com_wallpaper (1).jpg";
import Imagen2 from "../img/wallpaperflare.com_wallpaper (2).jpg";
import Imagen3 from "../img/wallpaperflare.com_wallpaper.jpg";

function Home() {
    return (
        <>
            <Carousel imagen={Imagen} imagen2={Imagen2} imagen3={Imagen3} />
        </>
    )

}
export default Home;