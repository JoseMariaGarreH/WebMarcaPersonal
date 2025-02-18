import { Route,Routes } from "react-router-dom";
import MenuEmpresa from "../componentes/MenuEmpresa/MenuEmpresa";
import BusquedaProyectos from "./BusquedaProyectos";
import BusquedaAlumnos from "./BusquedaAlumnos";

const Empresas = () => {
    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <Routes>
                <Route path='/empresa/proyectos' element={<BusquedaProyectos></BusquedaProyectos>}></Route>
                <Route path='/empresa/alumnos' element={<BusquedaAlumnos></BusquedaAlumnos>}></Route>
            </Routes>
        </>
    )
}

export default Empresas;