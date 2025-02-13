const BotonIdiomas = (props) => {

    const IDIOMA = "idiomaSeleccionado";

    function asignarIdioma(event) {
        console.log(event.target.value); 
    }

    return (
        <div id={IDIOMA}>
            <a className="nav-link" onClick={asignarIdioma} >
                <img src="src/assets/flag-for-flag-spain-svgrepo-com.svg" alt="Bandera Española" className="imagenIconos" />
            </a>
            <a className="nav-link" onClick={asignarIdioma}>
                <img src="src/assets/united-kingdom-uk-svgrepo-com.svg" alt="Bandera Inglesa" className="imagenIconos" />
            </a>
        </div>
    )
}

export default BotonIdiomas;