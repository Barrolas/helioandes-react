import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Detalle del Servicio</h2>
            <p>Viendo servicio ID: {id}</p>
        </div>
    );
};

export default ServiceDetail;
