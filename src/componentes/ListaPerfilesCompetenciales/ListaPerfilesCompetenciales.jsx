import { useContext } from 'react';
import flecha from "../../assets/caretupminor-svgrepo-com.svg";
import IdiomaContext from '../../contextos/IdiomaContext';
import { useState } from 'react';
import usePerfilesCompetenciales from '../../hooks/usePerfilesCompetenciales';
import './ListaPerfilesCompetenciales.css';
import ListaFamiliaProfesionales from '../ListaFamiliaProfesionales/ListaFamiliaProfesionales';

const ListaPerfilesCompetenciales = () => {

    const { idioma } = useContext(IdiomaContext);
    const [pulsado, setPulsado] = useState(false);
    const { listaPerfilesCompetenciales } = usePerfilesCompetenciales();

    function manejarPerfilesCompetenciales(perfilCompetencial) {
        return (
            <div key={perfilCompetencial.id}>
                <input type="checkbox" className="btn-check" id={`btn-check-${perfilCompetencial.id}`} autoComplete="off" />
                <label className="btn btn-primary" htmlFor={`btn-check-${perfilCompetencial.id}`} data-mdb-button-init data-mdb-ripple-init>
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
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">{idioma.alumnos.op1}</h5>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-outline-light w-100" type="button" data-bs-toggle="collapse" data-bs-target="#filtro" onClick={manejarPulsacion}>
                                {idioma.alumnos.op2} <img src={flecha} alt="flecha" className={`rotacion-perfil ${pulsado ? 'rotacion-activada-perfil' : ''}`} />
                            </button>
                            <div className="collapse" id="filtro">
                                <div className="card card-body">
                                    <div className="card-custom">
                                        {listaPerfilesCompetenciales.map(manejarPerfilesCompetenciales)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ListaPerfilesCompetenciales;