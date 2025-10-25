import './App.css';
import {NavbarInicio, HeroInicio, Servicios, Soluciones, Calculadoralntegral, Planes, Testimonios, FAQ, Contacto, FooterInicio} from './components/index.js';

function App() {
  return (
    <div className="App" id="top">
      <NavbarInicio />
      <HeroInicio />
      <Servicios />
      <Soluciones />
      <Calculadoralntegral />
      <Planes />
      <Testimonios />
      <FAQ />
      <Contacto />
      <FooterInicio />
    </div>
  );
}

export default App;
