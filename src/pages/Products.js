import React from 'react'
import Card from "../components/Card";
import Imagen from "../img/monitor-asus.jpg";
import Imagen2 from "../img/teclado.jpg"
import Imagen3 from "../img/mouse.jpg"

function Products() {
    return (
        <>
            <div class="row m-4 align-items-center">
                <div class="col-sm-4 mb-3"><Card img={Imagen} title='Monitor ASUS 24"' description='$85.999' /></div>
                <div class="col-sm-4 mb-3"><Card img={Imagen2} title='Teclado Mecanizado' description='$9.999' /></div>
                <div class="col-sm-4 mb-3"><Card img={Imagen3} title='Mouse Gamer' description='$25.190' /></div>
            </div>
        </>
    )
}

export default Products;