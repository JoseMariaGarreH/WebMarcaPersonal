import { Link } from "react-router-dom";
import './Home.css';
import Pie from "../../componentes/Pie/Pie";
import { useContext } from "react";
import IdiomaContext from "../../contextos/IdiomaContext";

const Menu = () => {

    const {idioma} = useContext(IdiomaContext);

    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 carta-temas">
                    <Link to='/empresas'>
                        <img src="src/img/empresa.jpg" className="img-fluid" alt="Empresa"></img>
                        <div className="text-center texto-elevado">
                            <p>{idioma.temas.op1}</p>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-4 carta-temas">
                    <Link to='/centroeducativo'>
                        <img src="src/img/school.jpg" className="img-fluid" alt="Centro educativo"></img>
                        <div className="text-center texto-elevado">
                            <p>{idioma.temas.op2}</p>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-4 carta-temas">
                    <Link to='/alumnos'>
                        <img src="src/img/student.jpg" className="img-fluid" alt="Alumnos"></img>
                        <div className="text-center texto-elevado">
                            <p>{idioma.temas.op3}</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Pie></Pie>
        </>
    )
}

export default Menu;