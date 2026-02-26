import './nav-bar.css';
export const Navbar = () => {
    return(
    <ul className='nav'>
       <li>HOME</li>
       <li>QUIENES <br />SOMOS </li>
       <li onClick={() => setPagina('contacto')}>CONTACTO</li>
    </ul>
 )    

}