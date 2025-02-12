import { Link } from "react-router-dom";
import './Home.css';

const Menu = () => {
    return (
        <div className="col-12 align-items-center">
            <Link to='/empresas'><img className="imageneslinks" src="src/img/empresa.jpg"></img></Link>
            <Link to='/centroeducativo'><img className="imageneslinks" src="src/img/school.jpg"></img></Link>
            <Link to='/alumnos'><img className="imageneslinks" src="src/img/student.jpg" ></img></Link>
        </div>
    )
}

export default Menu;