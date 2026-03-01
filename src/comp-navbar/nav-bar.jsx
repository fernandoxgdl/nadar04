import './nav-bar.css';
export const Navbar = ({cambiarPagina}) => {
    return(
    <nav className='nav'>
       <li onClick={() => cambiarPagina('home')}>HOME</li>
       <li onClick={() => cambiarPagina('quienes')}>QUIENES <br />SOMOS</li>
       <li onClick={() => cambiarPagina('contacto')}>CONTACTO</li>
    </nav>
 )    

}