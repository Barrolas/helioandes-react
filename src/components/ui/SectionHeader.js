import React from 'react';

const SectionHeader = ({ title, description, bgColor }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="mb-0">{title}</h4>
            <p className="mb-0 text-muted">{description}</p>
        </div>
    );
};

export default SectionHeader;
