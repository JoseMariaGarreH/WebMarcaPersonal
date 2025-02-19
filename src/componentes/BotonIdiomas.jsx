import banderaEsp from '../assets/flag-for-flag-spain-svgrepo-com.svg';
import banderaGb from '../assets/united-kingdom-uk-svgrepo-com.svg';

const BotonIdiomas = (props) => {

    function asignarIdioma(idioma) {
        props.manejarIdioma(idioma); 
    }

    return (
        <>
            <a className="nav-link" onClick={() => asignarIdioma("es")}>
                <img src={banderaEsp} alt="Bandera Española" className="imagenIconos" />
            </a>
            <a className="nav-link" onClick={() => asignarIdioma("gb")}>
                <img src={banderaGb} alt="Bandera Inglesa" className="imagenIconos" />
            </a>
        </>
    )
}

export default BotonIdiomas;