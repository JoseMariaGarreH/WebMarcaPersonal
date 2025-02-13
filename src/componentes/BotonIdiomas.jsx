const BotonIdiomas = (props) => {

    function asignarIdioma(idioma) {
        props.manejarIdioma(idioma); 
    }

    return (
        <>
            <a className="nav-link" onClick={() => asignarIdioma("es")}>
                <img src="src/assets/flag-for-flag-spain-svgrepo-com.svg" alt="Bandera Española" className="imagenIconos" />
            </a>
            <a className="nav-link" onClick={() => asignarIdioma("gb")}>
                <img src="src/assets/united-kingdom-uk-svgrepo-com.svg" alt="Bandera Inglesa" className="imagenIconos" />
            </a>
        </>
    )
}

export default BotonIdiomas;