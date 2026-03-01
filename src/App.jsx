import { Logo } from './comp-logo/Logo';
import { Navbar } from './comp-navbar/nav-bar';
import { Saludo } from './comp-saludo/saludo';
import './estilo-g.css';
import { useState } from 'react';
import { Contacto }  from './pages/contacto';
import { Quienes } from './pages/quienes';
function App() {
  
  const [pagina, setPagina] = useState('home');


  return (
    <>
  <div className='contenedor'>
    <Logo />

   <Saludo />

    <Navbar cambiarPagina={setPagina}/>
    </div>
    {pagina === 'home' && <h1>R</h1>}
    {pagina === 'quienes' && <Quienes />}
    {pagina === 'contacto' && <Contacto />}
    
    </>
  )
}

export default App;
