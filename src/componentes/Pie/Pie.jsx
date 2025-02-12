import { useNavigate } from "react-router-dom";
import './Pie.css';

const Pie = () => {

    const navegar = useNavigate();

    function irAInicio() {
        navegar('/');
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <footer className="fondofooter">
                    <div className="text-center fondosegundofooter">
                        <div className="row">   
                            <div className="col-12 col-md-3">
                                <h5 className="font-weight-bold" >Empresas</h5>
                                <h2 className="font-weight-bold">0</h2>
                            </div>
                            <div className="col-12 col-md-3 mx-auto">
                                <h5 className="font-weight-bold">Proyectos</h5>
                                <h2 className="font-weight-bold">0</h2>
                            </div>
                            <div className="col-12 col-md-3">
                                <h5 className="font-weight-bold">Alumnos</h5>
                                <h2 className="font-weight-bold">0</h2>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h6><a className="btn" href="https://cifpcarlos3.es/es">CIFP Carlos III</a></h6>
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">C/ Carlos III, 30201 - Cartagena | </li>
                            <li className="list-inline-item">30019702@murciaeduca.es | </li>
                            <li className="list-inline-item">968321301</li>
                        </ul>
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/cifpcarlos3">
                                    <img className="iconos" src="src/assets/facebook.svg" alt="Facebook" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://x.com/cifpcarlos3">
                                    <img className="iconos" src="src/assets/x_light.svg" alt="X" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/cifpcarlos3">
                                    <img className="iconos" src="src/assets/instagram.svg" alt="Instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.tiktok.com/@cifpcarlos3">
                                    <img className="iconos" src="src/assets/tiktok.svg" alt="Tiktok" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.youtube.com/@cifpcarlostercero">
                                    <img className="iconos" src="src/assets/youtube.svg" alt="Youtube" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a href="/" onClick={irAInicio}>
                                    <img src="src/img/mp-logoReves.png" alt="Logo" className="logofooter align-baseline" ></img>
                                </a>
                            </li>
                            <li className="list-inline-item">Marca Personal FP</li>
                            <li className="list-inline-item"> | Diseño Web CFGS Desarrollo de Aplicaciones Web © 2024</li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Pie;