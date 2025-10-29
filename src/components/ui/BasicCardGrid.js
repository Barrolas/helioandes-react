import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicCard from './BasicCard';

const BasicCardGrid = ({ 
    cards, 
    gridConfig = { lg: 6, xl: 3 }, 
    cardClassName = "",
    gapClass = "g-4",
    // Props del botón
    buttonText,
    buttonVariant,
    buttonHelioStyle,
    buttonOnClick,
    buttonHref,
    buttonTarget
}) => {
    return (
        <Row className={gapClass}>
            {cards.map((card, index) => (
                <Col key={index} lg={gridConfig.lg} xl={gridConfig.xl}>
                    <BasicCard 
                        {...card} 
                        className={cardClassName}
                        buttonText={buttonText}
                        buttonVariant={buttonVariant}
                        buttonHelioStyle={buttonHelioStyle}
                        buttonOnClick={buttonOnClick}
                        buttonHref={buttonHref}
                        buttonTarget={buttonTarget}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default BasicCardGrid;
