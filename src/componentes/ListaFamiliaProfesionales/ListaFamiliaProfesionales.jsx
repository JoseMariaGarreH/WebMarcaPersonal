import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import "./ListaFamiliaProfesionales.css";
import flecha from "../../assets/caretupminor-svgrepo-com.svg";
import { useState } from "react";

const ListaFamiliaProfesionales = () => {

    const { listaFamiliaProfesionales } = useFamiliasProfesionales();
    const [pulsado,setPulsado] = useState(false);

    function manejarPulsacion() {
        setPulsado(!pulsado);
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">Búsqueda de Proyectos</h5>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-outline-light w-100" type="button" data-bs-toggle="collapse" data-bs-target="#filtro" onClick={manejarPulsacion}>
                            Filtrar por familias profesionales <img src={flecha} alt="Caret Up" className={`rotacion ${pulsado ? 'rotacion-activada' : ''}`} /> 
                        </button>
                        <div className="collapse" id="filtro">
                            <div className="card card-body">
                                <div className="card-custom">
                                    {listaFamiliaProfesionales.map(familiaProfesional => (
                                        <div key={familiaProfesional.id}>
                                            <input type="checkbox" className="btn-check" id={`btn-check-${familiaProfesional.id}`} autoComplete="off"/>
                                            <label className="btn btn-primary" htmlFor={`btn-check-${familiaProfesional.id}`} data-mdb-button-init data-mdb-ripple-init>
                                                {familiaProfesional.nombre}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaFamiliaProfesionales;