import { useContext } from "react";
import logoNaranja from "../../img/mp-logoNaranja100.png";
import { Link } from "react-router-dom";
import './Cabecera.css';

// -- Componentes -------------------------------------------------
import BotonIdiomas from "../BotonIdiomas/BotonIdiomas";
// -- Contextos -------------------------------------------------
import IdiomaContext from "../../contextos/IdiomaContext";

const Cabecera = () => {

    const { cambiarIdioma } = useContext(IdiomaContext);

    // Función que maneja el cambio de idioma de la cabecera
    function manejarIdioma(nuevoIdioma) {
        cambiarIdioma(nuevoIdioma);
    }

    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-md">
                    <Link className="navbar-brand" to="/">
                        <img src={logoNaranja}alt="Logo" className="logoCabecera d-inline-block align-text-top" ></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <div className="navbar-nav d-flex align-items-center gap-2">
                            <h1 className="titulocabecera">Marca Personal FP</h1>
                            <BotonIdiomas manejarIdioma={manejarIdioma}></BotonIdiomas>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Cabecera;