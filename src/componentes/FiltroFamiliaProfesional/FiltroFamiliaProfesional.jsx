import flecha from "../../assets/caretupminor-svgrepo-com.svg";
import { useState } from "react";

// -- Hooks ---------------------------------------------------------
import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";

const FiltroFamiliaProfesionales = (props) => {

    // Estado que controla si el botón de filtro está pulsado o no
    const [pulsado, setPulsado] = useState(false);
    const { listaFamiliaProfesionales } = useFamiliasProfesionales(); // Recogemos la lista de familias profesionales del custom hook

    // Función que maneja el checkbox de las familias profesionales
    function manejarCheckBox(familiaProfesional, event) {
        // Si el checkbox está marcado, añadimos la familia profesional a la lista de familias profesionales
        if (event.target.checked) {
            props.setListaFamilias(props.listaFamilias.concat(familiaProfesional));
        } else { // Si no, la eliminamos de la lista
            // Recorremos la lista de familias profesionales y eliminamos la que tenga el mismo id que la que queremos eliminar
            props.setListaFamilias(props.listaFamilias.filter((familia) => familia.id !== familiaProfesional.id));
        }
    }

    // Función que construye las familias profesionales con los datos que le hemos pasado
    function manejarFamiliasProfesionales(familiaProfesional) {
        return (
            <div key={familiaProfesional.nombre}>
                <input type="checkbox" className="btn-check" id={`btn-check-${familiaProfesional.nombre}`} autoComplete="off" onChange={(event) => manejarCheckBox(familiaProfesional, event)} />
                <label className="btn btn-primary" htmlFor={`btn-check-${familiaProfesional.nombre}`} data-mdb-button-init data-mdb-ripple-init>
                    {familiaProfesional.nombre}
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
            <button className="btn btn-outline-light w-100" type="button" data-bs-toggle="collapse" data-bs-target="#filtroFamilia" onClick={manejarPulsacion}>
                {props.idioma.proyectos.op2} <img src={flecha} alt="flecha" className={`rotacion ${pulsado ? 'rotacion-activada' : ''}`} />
            </button>
            <div className="collapse" id="filtroFamilia">
                <div className="card card-body">
                    <div className="card-custom">
                        {listaFamiliaProfesionales.map(manejarFamiliasProfesionales)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiltroFamiliaProfesionales;