import { useState, useEffect } from "react";
import axios from "axios";
import Personaje from "./Personaje";

function ListaPersonajes() {
    const [personajes, setPersonajes] = useState([]);
    
    useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((respuesta) => {
        setPersonajes(respuesta.data.results);
      })
      .catch((error) => {
        console.error("Error al obtener los personajes:", error);
      });
  }, []);
  
  return(
    <div className="container">
        <div className="row">
            {personajes.map((p) => (
                <div className="col-12 col-md-6 col-lg-3 mb-4" key={p.id}>
                    <Personaje personaje={p} />
                </div> 
            ))}
        </div>
    </div>
  );
}


export default ListaPersonajes;