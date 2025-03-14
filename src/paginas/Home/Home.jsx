import { Link } from "react-router-dom";
import { useContext } from "react";
import './Home.css';

// -- Componentes -------------------------------------------------
import Pie from "../../componentes/Pie/Pie";
// -- Contextos -------------------------------------------------
import IdiomaContext from "../../contextos/IdiomaContext";

const Menu = () => {

    const { idioma } = useContext(IdiomaContext);

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-4 carta-temas">
                    <Link to='/empresa'>
                        <img src="src/img/empresa.jpg" className="img-fluid img-temas" alt="Empresa"></img>
                        <div className="text-center texto-elevado">
                            <p>{idioma.temas.op1}</p>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-4 carta-temas">
                    <Link to='/centroeducativo'>
                        <img src="src/img/school.jpg" className="img-fluid img-temas" alt="Centro educativo"></img>
                        <div className="text-center texto-elevado">
                            <p>{idioma.temas.op4}</p>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-4 carta-temas">
                    <Link to='/alumnos'>
                        <img src="src/img/student.jpg" className="img-fluid img-temas" alt="Alumnos"></img>
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