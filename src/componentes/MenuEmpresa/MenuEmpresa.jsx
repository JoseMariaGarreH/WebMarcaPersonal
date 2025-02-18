import './MenuEmpresa.css';
import IdiomaContext from '../../contextos/IdiomaContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const MenuEmpresa = () => {

    const { idioma } = useContext(IdiomaContext);

    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-md justify-content-between sticky-top">
                    <span className="destacado">[ {idioma.temas.op1} ]</span>
                    <div className="navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className='nav-link' to='/empresa/proyectos'>{idioma.temas.op2}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/empresa/alumnos'>{idioma.temas.op3}</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MenuEmpresa;