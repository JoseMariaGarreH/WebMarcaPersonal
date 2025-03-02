import { useContext } from "react";
import useAlumnos from "../../hooks/useAlumnos";
import AlumnoMinCard from "../AlumnoMinCard/AlumnoMinCard";
import './ResultadosBusquedaAlumnos.css';
import IdiomaContext from "../../contextos/IdiomaContext";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

const ResultadosBusquedaAlumnos = (props) =>{

    const { idioma} = useContext(IdiomaContext);
    const { buscando , listaAlumnos } = useAlumnos();

    function manejarAlumnos(alumno){
        return <AlumnoMinCard key={alumno.id} nombre={alumno.nombre} apellidos={alumno.apellidos} 
                                idiomas={alumno.idiomas} ciclos={alumno.ciclos} curriculo={alumno.curriculo}>
                </AlumnoMinCard>;
    }

    function filtrarListaAlumnosPorFamiliaProfesional(alumno){
        for (let i = 0; i < props.listaFamilias.length; i++) {
            for (let j = 0; j < alumno.ciclos.length; j++) {
                if (alumno.ciclos[j].familia_id === props.listaFamilias[i].id) {
                    return true;
                }
            }
        }
        return false;
    }

    function filtrarListaAlumnosPorPerfilCompetencial(alumno){
        for (let i = 0; i < props.listaPerfiles.length; i++) {
            for (let j = 0; j < alumno.competencias.length; j++) {
                if (alumno.competencias[j].id === props.listaPerfiles[i].id) {
                    return true;
                }
            }
        }
        return false
    }

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="mb-0">{idioma.proyectos.op3}</h5>
                            </div>
                            <div className="card-text">
                                <div className="row">
                                    { buscando ?  <AjaxLoader></AjaxLoader> : "" }
                                    {props.listaPerfiles.length === 0 && props.listaFamilias.length === 0 ? 
                                    listaAlumnos.map(manejarAlumnos) : 
                                    listaAlumnos
                                        .filter(alumno => 
                                            (props.listaPerfiles.length === 0 || filtrarListaAlumnosPorPerfilCompetencial(alumno)) &&
                                            (props.listaFamilias.length === 0 || filtrarListaAlumnosPorFamiliaProfesional(alumno))
                                        )
                                        .map(manejarAlumnos)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultadosBusquedaAlumnos;