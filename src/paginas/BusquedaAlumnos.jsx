import ListaPerfilesCompetenciales from "../componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales";
import MenuEmpresa from "../componentes/MenuEmpresa/MenuEmpresa";
import ResultadosBusquedaAlumnos from "../componentes/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos";

const BusquedaAlumnos = () => {


    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <ListaPerfilesCompetenciales></ListaPerfilesCompetenciales>
            <ResultadosBusquedaAlumnos></ResultadosBusquedaAlumnos>
        </>
    )   
}

export default BusquedaAlumnos;