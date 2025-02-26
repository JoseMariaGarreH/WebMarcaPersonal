import { useContext } from "react";
import useProyectos from "../../hooks/useProyectos";
import AjaxLoader from "../AjaxLoader/AjaxLoader";
import ProyectoMinCard from "../ProyectoMinCard/ProyectoMinCard";
import IdiomaContext from "../../contextos/IdiomaContext";


const ResultadosBusquedaProyectos = (props) => {

    const { buscando,listaProyectos } = useProyectos();
    const { idioma } =  useContext(IdiomaContext);

    function manejarProyectos(proyecto){
        return <ProyectoMinCard key={proyecto.id} nombre={proyecto.nombre} ciclos={proyecto.ciclos} 
                                docente_id={proyecto.docente_id} participantes={proyecto.participantes}>
                </ProyectoMinCard>
    }

    function filtrarListaProyectos(proyecto){
        for (let i = 0; i < props.listaFamilias.length; i++) {
            for (let j = 0; j < proyecto.ciclos.length; j++) {
                if (proyecto.ciclos[j].familia_id === props.listaFamilias[i].id) {
                    return true;
                }
            }
        }
        return false;
    }

    function lanzarProyectos(){
        return (props.listaFamilias.length === 0) ? 
        listaProyectos.map(manejarProyectos) : 
        listaProyectos.filter(filtrarListaProyectos).map(manejarProyectos);
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
                                    { buscando ? lanzarProyectos() : <AjaxLoader></AjaxLoader>  }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )   

}

export default ResultadosBusquedaProyectos;