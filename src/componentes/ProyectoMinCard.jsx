const ProyectoMinCard = (props) => {

    function manejarCiclos(ciclo){
        return <li key={ciclo.id}>{ciclo.codCiclo}</li>
    }

    function manejarParticipantes(participante){
        return <li key={participante.id}>{participante.nombre}</li>
    }

    return (
        <>
            <div className="d-flex flex-wrap">
                <div className="col-4">
                    <div className="card" style={{borderRadius: '15px' }}>
                        <div className="card-body p-4">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="img-fluid" style={{width: '150px', borderRadius: '10px'}}></img>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="mb-1">{props.nombre}</h5>
                                    <div className="d-flex justify-content-start rounded-3 p-2 bg-body-tertiary">
                                        <div>
                                            <p className="small text-muted mb-1">Alumnos</p>
                                            <ul>{props.participantes.map(manejarParticipantes)}</ul>        
                                        </div>
                                        <div>
                                            <p className="small text-muted mb-1">Ciclos</p>
                                            <ul>{props.ciclos.map(manejarCiclos)}</ul>
                                        </div>
                                        <div className="px-3">
                                            <p className="small text-muted mb-1">Tutor</p>
                                            <p className="mb-0">{props.docente_id}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectoMinCard;