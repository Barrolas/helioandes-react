import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ 
    variant = 'primary', 
    children, 
    className = '', 
    helioStyle = 'filled', // 'filled', 'outlined' o 'secondary'
    size = 'md',
    onClick,
    href,
    target,
    disabled = false,
    type = 'button',
    ...props 
}) => {
    // Determinar las clases CSS basadas en el estilo HelioAndes
    let helioClass = '';
    if (helioStyle === 'outlined') {
        helioClass = 'helio-btn-outlined';
    } else if (helioStyle === 'secondary') {
        helioClass = 'helio-btn-secondary';
    } else {
        helioClass = 'helio-btn-filled';
    }
    
    // Combinar clases
    const combinedClassName = `${helioClass} ${className}`.trim();

    return (
        <BootstrapButton
            variant={variant}
            className={combinedClassName}
            size={size}
            onClick={onClick}
            href={href}
            target={target}
            disabled={disabled}
            type={type}
            {...props}
        >
            {children}
        </BootstrapButton>
    );
};

export default Button;
