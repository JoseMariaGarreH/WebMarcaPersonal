import useFamiliasProfesionales from "../../hooks/useFamiliasProfesionales";
import "./ListaFamiliaProfesionales.css";
import flecha from "../../assets/caretupminor-svgrepo-com.svg";
import { useState } from "react";
import { useContext } from "react";
import IdiomaContext from "../../contextos/IdiomaContext";

const ListaFamiliaProfesionales = (props) => {

    const { idioma } = useContext(IdiomaContext);
    const { listaFamiliaProfesionales } = useFamiliasProfesionales();
    const [pulsado, setPulsado] = useState(false);

    function manejarCheckBox(familiaProfesional,event){
        if(event.target.checked){
            props.setListaFamilias(props.listaFamilias.concat(familiaProfesional));
        } else {
            props.setListaFamilias(props.listaFamilias.filter((familia) => familia.id !== familiaProfesional.id));
        }
    }

    function manejarFamiliasProfesionales(familiaProfesional) {
        return (
            <div key={familiaProfesional.id}>
                <input type="checkbox" className="btn-check" id={`btn-check-${familiaProfesional.id}`} autoComplete="off" onChange={(event) => manejarCheckBox(familiaProfesional,event)}/>
                <label className="btn btn-primary" htmlFor={`btn-check-${familiaProfesional.id}`} data-mdb-button-init data-mdb-ripple-init>
                    {familiaProfesional.nombre}
                </label>
            </div>
        )
    }

    function manejarPulsacion() {
        setPulsado(!pulsado);
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">{idioma.proyectos.op1}</h5>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-outline-light w-100" type="button" data-bs-toggle="collapse" data-bs-target="#filtro" onClick={manejarPulsacion}>
                        {idioma.proyectos.op2} <img src={flecha} alt="flecha" className={`rotacion-familia ${pulsado ? 'rotacion-activada-familia' : ''}`} />
                        </button>
                        <div className="collapse" id="filtro">
                            <div className="card card-body">
                                <div className="card-custom">
                                    {listaFamiliaProfesionales.map(manejarFamiliasProfesionales)}
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