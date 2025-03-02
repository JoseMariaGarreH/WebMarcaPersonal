import { useContext } from "react";

// -- Componentes -------------------------------------------------
import AlumnoMinCard from "../AlumnoMinCard/AlumnoMinCard";
import AjaxLoader from "../AjaxLoader/AjaxLoader";

// -- Hooks -------------------------------------------------
import useAlumnos from "../../hooks/useAlumnos";

// -- Contextos -------------------------------------------------
import IdiomaContext from "../../contextos/IdiomaContext";

const ResultadosBusquedaAlumnos = (props) =>{

    const { idioma } = useContext(IdiomaContext);
    const { buscando , listaAlumnos } = useAlumnos(); // Cojemos los datos que hemos recogido de la promesa del ENDPOINT 
                                                      // y que hemos guardado en el custom hook

    // Función que se encarga de devolver los datos de los alumnos y los pasa a un componente para montarlos
    function manejarAlumnos(alumno){
        return <AlumnoMinCard key={alumno.id} nombre={alumno.nombre} apellidos={alumno.apellidos} 
                                idiomas={alumno.idiomas} ciclos={alumno.ciclos} curriculo={alumno.curriculo}>
                </AlumnoMinCard>;
    }


    function filtrarListaAlumnosPorFamiliaProfesional(alumno){
        // Recorremos la lista de familias profesionales y la lista de ciclos por el atributo de familia_id 
        // y comprobamos si el alumno tiene alguna de las familias profesionales
        // Recorriendo las dos listas de objetos, si encontramos alguna coincidencia, devolvemos true si no, false
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
        // Recorremos la lista de perfiles competenciales y la lista de competencias por el atributo de id
        // y comprobamos si el alumno tiene alguna de las competencias
        // Recorriendo las dos listas de objetos, si encontramos alguna coincidencia, devolvemos true si no, false
        for (let i = 0; i < props.listaPerfiles.length; i++) {
            for (let j = 0; j < alumno.competencias.length; j++) {
                if (alumno.competencias[j].id === props.listaPerfiles[i].id) {
                    return true;
                }
            }
        }
        return false
    }

    // Función que se encarga de comprobar si el alumno cumple con los filtros de familia profesional y perfil competencial
    // Si no hay filtros, devolvemos true, si hay filtros, comprobamos si el alumno cumple con alguno de ellos
    function comprobarFiltros(alumno){
        const filtroFamilias = props.listaFamilias.length === 0 || filtrarListaAlumnosPorFamiliaProfesional(alumno);
        const filtroPerfiles = props.listaPerfiles.length === 0 || filtrarListaAlumnosPorPerfilCompetencial(alumno);
        return filtroFamilias && filtroPerfiles;
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
                                    {/* Si estamos buscando, mostramos el loader */}
                                    { buscando ?  <AjaxLoader></AjaxLoader> : "" }
                                    {/* Si no estamos buscando, mostramos los alumnos*/}
                                    {props.listaPerfiles.length === 0 && props.listaFamilias.length === 0 ? 
                                    listaAlumnos.map(manejarAlumnos) : 
                                    listaAlumnos.filter(comprobarFiltros).map(manejarAlumnos)}
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