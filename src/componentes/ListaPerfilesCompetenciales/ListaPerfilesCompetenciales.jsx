import { useContext } from 'react';
import IdiomaContext from '../../contextos/IdiomaContext';
import './ListaPerfilesCompetenciales.css';
import FiltroFamiliaProfesionales from '../FiltroFamiliaProfesional';
import FiltroPerfilCompetencial from '../FiltroPerfilCompetencial';

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