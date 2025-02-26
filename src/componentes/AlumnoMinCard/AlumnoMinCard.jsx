import './AlumnoMinCard.css';

const AlumnoMinCard = (props) => {

    function manejarCiclos(ciclo) {
        return <li className="list-group-item small p-1" data-bs-toggle="tooltip" title={ciclo.nombre} key={ciclo.id}>{ciclo.codCiclo}</li>
    }

    return (
        <>
            <div className="col-12 col-sm-12 col-md-4">
                <div className="card card-fondo">
                    <div className="card-body p-4">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                    alt="Generic placeholder image" className="img-fluid retoque-imagen" />
                            </div>
                            <div className="ms-3">
                                <h5 className="mb-1">{props.nombre +" "+props.apellidos}</h5>
                                <div className="d-flex justify-content-start rounded-3 p-2 bg-body-tertiary">
                                    <div>
                                        <p className="small text-muted mb-1">Ciclos</p>
                                        <ul className="list-group list-group-horizontal">{props.ciclos.map(manejarCiclos)}</ul>
                                        <p className="small text-muted mb-1">Perfiles</p>
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