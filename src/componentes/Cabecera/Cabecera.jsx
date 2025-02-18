import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import './Cabecera.css';
import BotonIdiomas from "../BotonIdiomas";
import IdiomaContext from "../../contextos/IdiomaContext";

const Cabecera = () => {

    const navegar = useNavigate();
    const { cambiarIdioma } = useContext(IdiomaContext);

    function irAInicio() {
        navegar('/');
    }

    function manejarIdioma(nuevoIdioma){
        cambiarIdioma(nuevoIdioma);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-md">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/" onClick={irAInicio}>
                                <img src="src/img/mp-logoNaranja100.png" alt="Logo" className="logoCabecera d-inline-block align-text-top" ></img>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <div className="navbar-nav d-flex align-items-center gap-2">
                                    <h1 className="titulocabecera">Marca Personal FP</h1>
                                    <BotonIdiomas manejarIdioma={manejarIdioma}></BotonIdiomas>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Cabecera;