import './AlumnoMinCard.css';
import persona from '../../img/persona.jpg'

const AlumnoMinCard = (props) => {

    // Función que pinta los ciclos en la tarjeta de alumno para mostrarlos con un tooltip que muestra el nombre del ciclo
    function manejarCiclos(ciclo) {
        return <li className="list-group-item small p-1" data-bs-toggle="tooltip" title={ciclo.nombre} key={ciclo.id}>{ciclo.codCiclo}</li>
    }

    // Función que pinta los idiomas en la tarjeta de alumno para mostrarlos, con el idioma, el nivel y si está certificado
    // Con un tooltip que muestra si está certificado o no, su nivel y el nombre del idioma
    function manejarIdiomas(idioma) {
        // Si el idioma está certificado, se muestra una C, si no, SC
        // Para luego guardarlo en una variable que se mostrará en el tooltip
        const certificadoTooltip = idioma.certificado ? "certificado" : "sin certificar";
        const certificadoLabel = idioma.certificado ? "C" : "SC";

        return (
            <li className="list-group-item small p-1" key={idioma.alpha2}>
                <img 
                    src={`https://flagcdn.com/16x12/${idioma.alpha2 === "en" ? "gb" : idioma.alpha2}.png`} 
                    alt={idioma.english_name} 
                    title={idioma.native_name} 
                    className="me-1"
                />
                <span>{idioma.nivel}</span>
                <span 
                    className="ms-2" 
                    data-bs-toggle="tooltip" 
                    title={certificadoTooltip}
                >
                    {certificadoLabel}
                </span>
            </li>
        );
    }

    return (
        <>
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card card-fondo">
                    <div className="card-body p-4">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img src={persona}
                                    alt="Generic placeholder image" className="img-fluid retoque-imagen" />
                            </div>
                            <div className="ms-3">
                                <h5 className="mb-1">{props.nombre + " " + props.apellidos}</h5>
                                <div className="d-flex justify-content-start rounded-3 p-2 bg-body-tertiary">
                                    <div>
                                        <p className="small text-muted mb-1">Ciclos</p>
                                        <ul className="list-group list-group-horizontal">{props.ciclos.map(manejarCiclos)}</ul>
                                        <p className="small text-muted mb-1">Perfiles</p>
                                        <p className="small text-muted mb-1">Idiomas</p>
                                        <ul className="list-group list-group-vertical">{props.idiomas.map(manejarIdiomas)}</ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <textarea className="form-control text-area-custom" readOnly value={props.curriculo.texto_curriculum}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlumnoMinCard;