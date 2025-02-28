import flecha from "../assets/caretupminor-svgrepo-com.svg";
import { useState } from "react";
import useFamiliasProfesionales from "../hooks/useFamiliasProfesionales";

const FiltroFamiliaProfesionales = (props) => {

    const [pulsado, setPulsado] = useState(false);
    const { listaFamiliaProfesionales } = useFamiliasProfesionales();

    function manejarCheckBox(familiaProfesional, event) {
        if (event.target.checked) {
            props.setListaFamilias(props.listaFamilias.concat(familiaProfesional));
            console.log(props.listaFamilias);
        } else {
            props.setListaFamilias(props.listaFamilias.filter((familia) => familia.id !== familiaProfesional.id));
        }
    }

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