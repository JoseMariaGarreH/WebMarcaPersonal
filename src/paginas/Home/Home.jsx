import { Link } from "react-router-dom";
import './Home.css';
import Pie from "../../componentes/Pie/Pie";

const Menu = () => {

    

    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 carta-temas">
                    <Link to='/empresas'>
                        <img src="src/img/empresa.jpg" className="img-fluid img-temas" alt="Empresa"></img>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-4 carta-temas">
                    <Link to='/centroeducativo'>
                        <img src="src/img/school.jpg" className="img-fluid img-temas" alt="Centro educativo"></img>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-4 carta-temas">
                    <Link to='/alumnos'>
                        <img src="src/img/student.jpg" className="img-fluid img-temas" alt="Alumnos"></img>
                    </Link>
                </div>
            </div>
            <Pie></Pie>
        </>
    )
}

export default Menu;