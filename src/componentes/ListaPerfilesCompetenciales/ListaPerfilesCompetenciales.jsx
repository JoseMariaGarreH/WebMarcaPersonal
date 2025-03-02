import { useContext } from 'react';
import './ListaPerfilesCompetenciales.css';

// -- Componentes -------------------------------------------------
import FiltroFamiliaProfesionales from '../FiltroFamiliaProfesional';
import FiltroPerfilCompetencial from '../FiltroPerfilCompetencial';

// -- Contextos -------------------------------------------------
import IdiomaContext from '../../contextos/IdiomaContext';

const ListaPerfilesCompetenciales = (props) => {

    const { idioma } = useContext(IdiomaContext);

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">{idioma.alumnos.op1}</h5>
                        </div>
                        <div className="card-body">
                            {/* Llevamos toda la lógica del filtrado hacia otros componentes 
                            y le pasamos los valores que necesitam los dos componentes de filtrado */}
                            <FiltroPerfilCompetencial idioma={idioma} 
                                                    listaPerfiles={props.listaPerfiles} 
                                                    setListaPerfiles={props.setListaPerfiles}>
                            </FiltroPerfilCompetencial>
                            <FiltroFamiliaProfesionales idioma={idioma}
                                                        listaFamilias={props.listaFamilias}
                                                        setListaFamilias={props.setListaFamilias}>
                            </FiltroFamiliaProfesionales>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ListaPerfilesCompetenciales;