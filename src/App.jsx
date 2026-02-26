import { Logo } from './comp-logo/Logo';
import { Navbar } from './comp-navbar/nav-bar';
import { Saludo } from './comp-saludo/saludo';
import './estilo-g.css';
import { Contacto }  from './pages/contacto';
import { useState } from 'react';
import { Quienes } from './pages/quienes';
function App() {
  
  const [pagina, setPagina] = useState('home');

  return (
    <>
    <Logo />

   <Saludo />

    <Navbar />
    
    </>
  )
}

export default App;
