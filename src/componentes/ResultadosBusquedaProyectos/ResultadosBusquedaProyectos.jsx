import useProyectos from "../../hooks/useProyectos";
import ProyectoMinCard from "../ProyectoMinCard/ProyectoMinCard";

const ResultadosBusquedaProyectos = (props) => {

    const { listaProyectos } = useProyectos();

    function manejarProyectos(proyecto){
        return <ProyectoMinCard className="col-4" key={proyecto.id} nombre={proyecto.nombre} ciclos={proyecto.ciclos} 
                                docente_id={proyecto.docente_id} participantes={proyecto.participantes}>
                </ProyectoMinCard>
    }


    console.log(props.listaFamilias);

    function filtrarListaProyectos(proyecto){
        for (let i = 0; i < proyecto.ciclos.length; i++) {
            if(props.listaFamilias.some(familia => familia.id === proyecto.ciclos[i].familia_profesional_id)){
                return true;
            }
        }
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
                                    {listaProyectos.filter(filtrarListaProyectos).map(manejarProyectos)}
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