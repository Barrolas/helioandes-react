import React from 'react';

const SectionHeader = ({ title, description }) => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mb-4">
            <h4 className="mb-2 mb-md-0 fw-bold">{title}</h4>
            <p className="mb-0 text-muted">{description}</p>
        </div>
    );
};

export default SectionHeader;
