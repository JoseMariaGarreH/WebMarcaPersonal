import { useContext } from "react";
import useAlumnos from "../../hooks/useAlumnos";
import AlumnoMinCard from "../AlumnoMinCard/AlumnoMinCard";
import './ResultadosBusquedaAlumnos.css';
import IdiomaContext from "../../contextos/IdiomaContext";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

const ResultadosBusquedaAlumnos = () =>{

    const { idioma} = useContext(IdiomaContext);
    const { buscando , listaAlumnos } = useAlumnos();

    function manejarAlumnos(alumno){
        return <AlumnoMinCard key={alumno.id} nombre={alumno.nombre} apellidos={alumno.apellidos} 
                                ciclos={alumno.ciclos} curriculo={alumno.curriculo}>
                </AlumnoMinCard>;
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
                                    { buscando ? listaAlumnos.map(manejarAlumnos) : <AjaxLoader></AjaxLoader>  }
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