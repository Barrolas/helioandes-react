import React from 'react';
import Section from '../ui/Section';
import { BasicCardGrid } from '../ui';
import { faHouse, faIndustry, faBatteryFull } from '@fortawesome/free-solid-svg-icons';

const Soluciones = () => {
    const solucionesData = [
        {
            icon: faHouse,
            title: "Hogar 3-5 kW",
            description: "Balance ideal entre costo y ahorro mensual.",
            iconColor: "#FF6B35"
        },
        {
            icon: faIndustry,
            title: "PyME 10-20 kW",
            description: "Para operación diurna con buena irradiación.",
            iconColor: "#9370DB"
        },
        {
            icon: faBatteryFull,
            title: "Off-grid con baterías",
            description: "Autonomía en zonas sin red eléctrica.",
            iconColor: "#00B04F"
        }
    ];

    return (
        <Section 
            id="soluciones"
            title="Soluciones" 
            description="Kits residenciales, PyME, off-grid con baterías e híbridos"
            bgColor="var(--helio-bg-light)"
        >
            <BasicCardGrid 
                cards={solucionesData} 
                gridConfig={{ lg: 4 }} 
                buttonText="Solicitar Asesoría"
                buttonVariant="primary"
                buttonHelioStyle="filled"
                buttonOnClick={() => window.location.href = '#contacto'}
                buttonHref="#contacto"
                buttonTarget="_self"
            />
        </Section>
    );
};

export default Soluciones;