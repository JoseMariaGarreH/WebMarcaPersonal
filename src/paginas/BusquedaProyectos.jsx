import ListaFamiliaProfesionales from "../componentes/ListaFamiliaProfesionales/ListaFamiliaProfesionales";
import ResultadosBusquedaProyectos from "../componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos";
import MenuEmpresa from "../componentes/MenuEmpresa/MenuEmpresa";

const BusquedaProyectos = () => {
    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <ListaFamiliaProfesionales></ListaFamiliaProfesionales>
            <ResultadosBusquedaProyectos></ResultadosBusquedaProyectos>
        </>
    );
}

export default BusquedaProyectos;