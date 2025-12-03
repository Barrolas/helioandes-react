import React from 'react';
import { NavbarInicio, HeroInicio, Servicios, Soluciones, Calculadoralntegral, Planes, Testimonios, FAQ, Contacto, FooterInicio } from '../components/index.js';

const LandingPage = () => {
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

export default LandingPage;
