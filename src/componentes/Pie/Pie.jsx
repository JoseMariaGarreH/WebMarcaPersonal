import { useContext } from 'react';
import './Pie.css';
import IdiomaContext from '../../contextos/IdiomaContext';
import useCount from '../../hooks/useCount';
import svg_facebook from '../../assets/facebook.svg';
import svg_x from '../../assets/x_light.svg';
import svg_instagram from '../../assets/instagram.svg';
import svg_tiktok from '../../assets/tiktok.svg';
import svg_youtube from '../../assets/youtube.svg';
import img_marca_personal from '../../img/mp-logoReves.png';

const Pie = () => {

    const { idioma } = useContext(IdiomaContext);
    const counts = useCount();

    return (
        <>
            <div className="row">
                <div className='col-12'>
                    <footer className="fondofooter">
                        <div className="text-center fondosegundofooter">
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    <h5 className="font-weight-bold" >{idioma.temas.op1}</h5>
                                    <h2 className="font-weight-bold">{counts.listaCounts[2]}</h2>
                                </div>
                                <div className="col-12 col-md-3 mx-auto">
                                    <h5 className="font-weight-bold">{idioma.temas.op2}</h5>
                                    <h2 className="font-weight-bold">{counts.listaCounts[1]}</h2>
                                </div>
                                <div className="col-12 col-md-3">
                                    <h5 className="font-weight-bold">{idioma.temas.op3}</h5>
                                    <h2 className="font-weight-bold">{counts.listaCounts[0]}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h6><a className="btn" href="https://cifpcarlos3.es/es" target="_blank">CIFP Carlos III</a></h6>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">C/ Carlos III, 30201 - Cartagena | </li>
                                <li className="list-inline-item">30019702@murciaeduca.es | </li>
                                <li className="list-inline-item">968321301</li>
                            </ul>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/cifpcarlos3" target="_blank">
                                        <img className="iconos" src={svg_facebook} alt="Facebook" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://x.com/cifpcarlos3" target="_blank">
                                        <img className="iconos" src={svg_x} alt="X" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/cifpcarlos3" target="_blank">
                                        <img className="iconos" src={svg_instagram} alt="Instagram" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.tiktok.com/@cifpcarlos3" target="_blank">
                                        <img className="iconos" src={svg_tiktok} alt="Tiktok" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.youtube.com/@cifpcarlostercero" target="_blank">
                                        <img className="iconos" src={svg_youtube} alt="Youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <img src={img_marca_personal} alt="Logo" className="logofooter align-baseline" ></img>
                                </li>
                                <li className="list-inline-item">Marca Personal FP</li>
                                <li className="list-inline-item"> | {idioma.pie.op1} CFGS {idioma.pie.op2} © 2024</li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Pie;