import { Routes,Route, Outlet } from "react-router-dom";
import MenuEmpresa from "../componentes/MenuEmpresa/MenuEmpresa";


const Empresas = () => {
    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            {/*<Routes>
                <Route path='/empresa/proyectos' element={<BusquedaProyectos></BusquedaProyectos>}></Route>
                <Route path='/empresa/alumnos' element={<BusquedaAlumnos></BusquedaAlumnos>}></Route>
            </Routes>*/}
            <Outlet />
        </>
    )
}

export default Empresas;