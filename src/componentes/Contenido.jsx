import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Link to='/'>Inicio</Link>
            <Link to='/empresas'>Empresas</Link>
            <Link to='/centroeducativo'>Centro Educativo</Link>
            <Link to='/alumnos'>Alumnos</Link>
        </div>
    )
}

export default Menu;