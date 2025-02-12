import { useNavigate } from "react-router-dom";
import './Cabecera.css';

const Cabecera = () => {

    const navegar = useNavigate();

    function irAInicio() {
        navegar('/');
    }

    return (
        <div className="row">
            <nav className="navbar navbar-expand-sm fondocabecera">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" onClick={irAInicio}>
                        <img className="imagenLogo" src="src/img/mp-logoNaranja100.png" alt="Logo"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <div className="navbar-nav d-flex align-items-center gap-2">
                            <h1 className="titulocabecera">Marca Personal FP</h1>
                            <a className="nav-link" href="#">
                                <img className="imagenIconos" src="src/assets/flag-for-flag-spain-svgrepo-com.svg" alt="Bandera Española" />
                            </a>
                            <a className="nav-link" href="#">
                                <img className="imagenIconos" src="src/assets/united-kingdom-uk-svgrepo-com.svg" alt="Bandera Inglesa" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Cabecera;