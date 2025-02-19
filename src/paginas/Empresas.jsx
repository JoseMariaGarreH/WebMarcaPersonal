import { Routes,Route } from "react-router-dom";
import MenuEmpresa from "../componentes/MenuEmpresa/MenuEmpresa";
import BusquedaProyectos from "./BusquedaProyectos";
import BusquedaAlumnos from "./BusquedaAlumnos";

const Empresas = () => {
    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <Routes>
                <Route path='/proyectos' element={<BusquedaProyectos></BusquedaProyectos>}></Route>
                <Route path='/alumnos' element={<BusquedaAlumnos></BusquedaAlumnos>}></Route>
            </Routes>
        </>
    )
}

export default Empresas;