import './ProyectoMinCard.css';
import proyectos from '../../img/proyectos.jpg';

const ProyectoMinCard = (props) => {

    // Función que pinta los ciclos en la tarjeta de alumno para mostrarlos con un tooltip que muestra el nombre del ciclo
    function manejarCiclos(ciclo) {
        return <li className="list-group-item small p-1" data-bs-toggle="tooltip" title={ciclo.nombre} key={ciclo.id}>{ciclo.codCiclo}</li>
    }

    // Función que pinta los participantes en la tarjeta de proyecto para mostrarlos
    function manejarParticipantes(participante) {
        return <li className="small" key={participante.id}>{participante.nombre}</li>
    }

    return (
        <>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="card card-fondo">
                    <div className="card-body p-4">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img src={proyectos}
                                    alt="Generic placeholder image" className="img-fluid retoque-imagen" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5 className="mb-1">{props.nombre}</h5>
                                <p className="mb-2 pb-1">Alumnos</p>
                                <ul>{props.participantes.map(manejarParticipantes)}</ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start rounded-3 p-2 m-2 bg-body-tertiary">
                            <div>
                                <p className="small text-muted mb-1">Ciclos</p>
                                <ul className="list-group list-group-horizontal">{props.ciclos.map(manejarCiclos)}</ul>
                            </div>
                            <div className="px-3">
                                <p className="small text-muted mb-1">Tutor</p>
                                <p className="mb-0">{props.docente_id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoMinCard;