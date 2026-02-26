import logotipo from './sinfondo1.png';
import './logo.css';

export const Logo = () => {
    return(
        <div className='logo'>
            <img src={logotipo} alt='logo' className='logo-img'/>    
        </div>
    );
}