import useProyectos from "../../hooks/useProyectos";
import ProyectoMinCard from "../ProyectoMinCard/ProyectoMinCard";

const ResultadosBusquedaProyectos = () => {

    const { listaProyectos } = useProyectos();

    function manejarProyectos(proyecto){
        return <ProyectoMinCard className="col-4" key={proyecto.id} nombre={proyecto.nombre} ciclos={proyecto.ciclos} 
                                docente_id={proyecto.docente_id} participantes={proyecto.participantes}>
                </ProyectoMinCard>
    }

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="mb-0">Resultados</h5>
                            </div>
                            <div className="card-text">
                                <div className="row">
                                    {listaProyectos.map(manejarProyectos)}
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