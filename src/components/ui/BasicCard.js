import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

const BasicCard = ({ 
    icon, 
    title, 
    description, 
    iconColor, 
    iconTransform,
    className = "",
    iconSize = "2x",
    buttonText,
    buttonVariant = "primary",
    buttonHelioStyle = "filled",
    buttonOnClick,
    buttonHref,
    buttonTarget
}) => {
    return (
        <Card className={`bg-white border-0 shadow-sm rounded-4 h-100 p-4 d-flex flex-column ${className}`}>
            <div className="service-icon mb-3">
                <FontAwesomeIcon 
                    icon={icon} 
                    size={iconSize} 
                    style={{ color: iconColor, transform: iconTransform }} 
                />
            </div>
            <Card.Title className="fw-bold mb-2">{title}</Card.Title>
            <Card.Text className="text-muted lh-base flex-grow-1">{description}</Card.Text>
            
            {buttonText && (
                <div className="mt-3">
                    <Button 
                        variant={buttonVariant}
                        helioStyle={buttonHelioStyle}
                        onClick={buttonOnClick}
                        href={buttonHref}
                        target={buttonTarget}
                        className="w-100"
                    >
                        {buttonText}
                    </Button>
                </div>
            )}
        </Card>
    );
};

export default BasicCard;
