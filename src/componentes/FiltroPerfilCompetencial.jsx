import flecha from "../assets/caretupminor-svgrepo-com.svg";
import { useState } from 'react';

// -- Hooks ---------------------------------------------------------
import usePerfilesCompetenciales from '../hooks/usePerfilesCompetenciales';

const FiltroPerfilCompetencial = (props) => {

    const { listaPerfilesCompetenciales } = usePerfilesCompetenciales(); // Recogemos la lista de perfiles competenciales del custom hook
    const [pulsado, setPulsado] = useState(false); // Estado que controla si el botón de filtro está pulsado o no

    // Función que maneja el checkbox de los perfiles competenciales
    function manejarCheckBox(perfilCompetencial, event) {
        // Si el checkbox está marcado, añadimos el perfil competencial a la lista de perfiles competenciales
        if (event.target.checked) {
            props.setListaPerfiles(props.listaPerfiles.concat(perfilCompetencial));
        } else { // Si no, la eliminamos de la lista
            // Recorremos la lista de perfiles competenciales y eliminamos la que tenga el mismo id que la que queremos eliminar
            props.setListaPerfiles(props.listaPerfiles.filter((perfil) => perfil.id !== perfilCompetencial.id));
        }
    }

    // Función que construye los perfiles competenciales con los datos que le hemos pasado
    function manejarPerfilesCompetenciales(perfilCompetencial) {
        return (
            <div key={perfilCompetencial.nombre}>
                <input type="checkbox" className="btn-check" id={`btn-check-${perfilCompetencial.nombre}`} autoComplete="off" onChange={(event) => manejarCheckBox(perfilCompetencial, event)}/>
                <label className="btn btn-primary" htmlFor={`btn-check-${perfilCompetencial.nombre}`} data-mdb-button-init data-mdb-ripple-init>
                    {perfilCompetencial.nombre}
                </label>
            </div>
        )
    }

    // Función que maneja la pulsación del botón de filtro
    function manejarPulsacion() {
        setPulsado(!pulsado);
    }

    return (
        <>
            <button className="btn btn-outline-light w-100" type="button" data-bs-toggle="collapse" data-bs-target="#filtroPerfil" onClick={manejarPulsacion}>
                {props.idioma.alumnos.op2} <img src={flecha} alt="flecha" className={`rotacion ${pulsado ? 'rotacion-activada' : ''}`} />
            </button>
            <div className="collapse" id="filtroPerfil">
                <div className="card card-body">
                    <div className="card-custom">
                        {listaPerfilesCompetenciales.map(manejarPerfilesCompetenciales)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiltroPerfilCompetencial;