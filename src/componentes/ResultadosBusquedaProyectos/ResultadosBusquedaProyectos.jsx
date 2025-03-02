import { useContext } from "react";

// -- Componentes -------------------------------------------------
import ProyectoMinCard from "../ProyectoMinCard/ProyectoMinCard";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

// -- Hooks -------------------------------------------------
import useProyectos from "../../hooks/useProyectos";

// -- Contextos -------------------------------------------------
import IdiomaContext from "../../contextos/IdiomaContext";

const ResultadosBusquedaProyectos = (props) => {

    const { buscando, listaProyectos } = useProyectos(); // Cogemos del custom hook los datos que hemos recogido de la promesa del ENDPOINT
    const { idioma } = useContext(IdiomaContext);

    // Función que se encarga de devolver los datos de los proyectos y los pasa a un componente para montarlos
    function manejarProyectos(proyecto) {
        return <ProyectoMinCard key={proyecto.id} nombre={proyecto.nombre} ciclos={proyecto.ciclos}
            docente_id={proyecto.docente_id} participantes={proyecto.participantes}>
        </ProyectoMinCard>
    }

    // Recorremos la lista de familias profesionales y la lista de ciclos por el atributo de familia_id 
    // y comprobamos si el proyecto tiene alguna de las familias profesionales
    // Recorriendo las dos listas de objetos, si encontramos alguna coincidencia, devolvemos true si no, false
    function filtrarListaProyectos(proyecto) {
        for (let i = 0; i < props.listaFamilias.length; i++) {
            for (let j = 0; j < proyecto.ciclos.length; j++) {
                if (proyecto.ciclos[j].familia_id === props.listaFamilias[i].id) {
                    return true;
                }
            }
        }
        return false;
    }

    return (
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
                                    {/* Si estamos buscando, mostramos el loader */}
                                    {buscando ? <AjaxLoader></AjaxLoader> : ""}
                                    {/* Si no estamos buscando, mostramos los alumnos*/}
                                    {(props.listaFamilias.length === 0) ?
                                        listaProyectos.map(manejarProyectos) :
                                        listaProyectos.filter(filtrarListaProyectos).map(manejarProyectos)}
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