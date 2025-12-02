import React from 'react';
import { useParams } from 'react-router-dom';

const PlanDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Detalle del Plan</h2>
            <p>Viendo plan ID: {id}</p>
        </div>
    );
};

export default PlanDetail;
