import usePerfilesCompetenciales from '../hooks/usePerfilesCompetenciales';
import flecha from "../assets/caretupminor-svgrepo-com.svg";
import { useState } from 'react';

const FiltroPerfilCompetencial = (props) => {

    const { listaPerfilesCompetenciales } = usePerfilesCompetenciales();
    const [pulsado, setPulsado] = useState(false);

    function manejarCheckBox(perfilCompetencial, event) {
        if (event.target.checked) {
            props.setListaPerfiles(props.listaPerfiles.concat(perfilCompetencial));
            console.log(props.listaPerfiles);
        } else {
            props.setListaPerfiles(props.listaPerfiles.filter((perfil) => perfil.id !== perfilCompetencial.id));
        }
    }

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