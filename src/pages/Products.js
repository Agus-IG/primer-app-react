import React from 'react'
import Card from "../components/Card";
import Imagen from "../img/monitor-asus.jpg";

function Products() {
    return (
        <>  
            <div className='cards'><Card img={Imagen} title='Monitor' description='Monitor Asus de 24"'  /></div>
            <div className='cards'><Card img={Imagen} title='Monitor' description='Monitor Asus de 24"'  /></div>
            <div className='cards'><Card img={Imagen} title='Monitor' description='Monitor Asus de 24"'  /></div>
        </>
    )
}

export default Products;