import React from 'react';
import Section from '../ui/Section';
import { BasicCardGrid } from '../ui';
import { faBolt, faWrench, faChartLine, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Servicios = () => {
    const serviciosData = [
        {
            icon: faBolt,
            title: "Estudio energético",
            description: "Análisis de consumo y propuesta ajustada a tu perfil.",
            iconColor: "#FF6B35",
            iconTransform: "rotate(-10deg)"
        },
        {
            icon: faWrench,
            title: "Instalación certificada",
            description: "Ejecutada por personal acreditado y normativa vigente.",
            iconColor: "#8B4513",
            iconTransform: "rotate(10deg)"
        },
        {
            icon: faChartLine,
            title: "Monitoreo",
            description: "Seguimiento de rendimiento y alertas preventivas.",
            iconColor: "#9370DB"
        },
        {
            icon: faBriefcase,
            title: "Mantención",
            description: "Planes periódicos para extender la vida útil del sistema.",
            iconColor: "#FF69B4"
        }
    ];

    return (
        <Section 
            id="servicios"
            title="Servicios" 
            description="Estudio energético, instalación certificada, monitoreo y mantención"
            bgColor="var(--helio-bg-light)"
        >
            <BasicCardGrid 
                cards={serviciosData} 
                gridConfig={{ lg: 6, xl: 3 }} 
            />
        </Section>
    );
};

export default Servicios;
