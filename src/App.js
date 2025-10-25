import './App.css';
import NavbarInicio from './components/Navbar';
import HeroInicio from './components/Hero';
import Servicios from './components/Servicios';
import Soluciones from './components/Soluciones';
import Calculadoralntegral from './components/Calculadoralntegral';
import Planes from './components/Planes';
import Testimonios from './components/Testimonios';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import FooterInicio from './components/Footer';

function App() {
  return (
    <div className="App">
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
