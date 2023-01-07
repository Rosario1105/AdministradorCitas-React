import React, {Fragment} from "react";

const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear citas</h2>
            <form>
                <label>Nombre Mascota</label>
                <input 
                type="text" 
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                />

                <label>Nombre Dueño</label>
                <input 
                type="text" 
                name="propietario"
                className="u-full-width"
                placeholder="Nombre Dueño de la mascota"
                />

                <label>Fecha</label>
                <input 
                type="date" 
                name="fecha"
                className="u-full-width"
                />
                
                <label>Hora</label>
                <input 
                type="time" 
                name="hora"
                className="u-full-width"
                />

                <label>Sintomas</label>
                <textarea 
                className="u-full-width"
                name="sintomas"
                ></textarea>

                <button type="submit"
                className="u-full-width button-primary"
                >
                Agregar Cita    
                </button>            
            </form>
        </Fragment>
    );
}

export default Formulario;
