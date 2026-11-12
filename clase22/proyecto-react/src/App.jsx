import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    edad: "",
    pais: "",
    biografia: "",
    trabajando: false, 
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, 
    });
  };

  return(
    <div style={{maxWidth: "500px", margin: "20px auto"}} className="formulario"> 
      <h2>Configurar perfil</h2>

      <div className="campo">
        <label htmlFor="nombre">Nombre: </label>  
        <input 
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}>
        </input>
      </div>

      <div className="campo">
        <label htmlFor="apellido">Apellido: </label>
        <input
        type="text"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}>
        </input>
      </div>

      <div className="campo">
        <label htmlFor="email">Email: </label>
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}>
        </input>
      </div>

      <div className="campo">
        <label htmlFor="edad">Edad: </label>
        <input
        type="number"
        name="edad"
        value={formData.edad}
        onChange={handleChange}>
        </input>
      </div>

      <div className="campo">
        <label htmlFor="pais">País: </label>
        <select name="pais" value={formData.pais} onChange={handleChange}>
          <option value="">Seleccioná un país</option>
          <option value="Argentina">Argentina</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Mexico">México</option>
          <option value="Peru">Perú</option>
        </select>
      </div>

      <div className="campo">
        <label htmlFor="biografia">Biografía: </label>
        <textarea
        name="biografia"
        value={formData.biografia}
        onChange={handleChange}
        rows="4">
        </textarea>
      </div>

      <div className="campo campo-checkbox">
        <label>
          <input
          type="checkbox"
          name="trabajando"
          checked={formData.trabajando}
          onChange={handleChange}>
          </input>¿Está trabajando? </label>
      </div>

      <br />

      <h2>Vista previa del perfil</h2>
      <p><strong>Nombre: </strong>{formData.nombre}</p>
      <p><strong>Apellido: </strong>{formData.apellido}</p>
      <p><strong>Email: </strong>{formData.email}</p>
      <p><strong>Edad: </strong>{formData.edad}</p>
      <p><strong>País: </strong>{formData.pais}</p>
      <p><strong>Biografía: </strong>{formData.biografia}</p>
      <p><strong>¿Trabaja actualmente? </strong>{""}
      {formData.trabajando ? "Sí" : "No"}</p>
    </div>
  );
}

export default App;
