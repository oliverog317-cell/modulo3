function Personaje({personaje}) {
    return(
        <div className="card">
            <img src={personaje.image} alt={personaje.name}></img>
            <h3>{personaje.name}</h3>
            <p>Estado: {personaje.status}</p>
            <p>Especie: {personaje.species}</p>
            <p>Género: {personaje.gender}</p>
            <p>Origen: {personaje.origin.name}</p>
        </div>
    );
}

export default Personaje;


