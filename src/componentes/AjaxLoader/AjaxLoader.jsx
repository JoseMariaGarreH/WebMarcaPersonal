import loader from '../../assets/spinner.svg';
import './AjaxLoader.css';

const AjaxLoader = () => {

    return(
        <div className="row d-flex justify-content-center">
            <img className='img-loader' src={loader} alt="spinner"></img>
        </div>
    )
}

export default AjaxLoader;