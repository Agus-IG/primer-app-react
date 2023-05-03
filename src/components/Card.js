import React from "react";

function Card(props) {
    return (
        <>
            <div class="card text-bg-dark">
                <img src={props.img} class="card-img-thumbnail" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <button className="btn btn-primary">Especificacion Tecnica</button>
                    </div>
            </div>
        </>
    );
}

export default Card;