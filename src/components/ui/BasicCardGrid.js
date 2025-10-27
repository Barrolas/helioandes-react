import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicCard from './BasicCard';

const BasicCardGrid = ({ 
    cards, 
    gridConfig = { lg: 6, xl: 3 }, 
    cardClassName = "",
    gapClass = "g-4"
}) => {
    return (
        <Row className={gapClass}>
            {cards.map((card, index) => (
                <Col key={index} lg={gridConfig.lg} xl={gridConfig.xl}>
                    <BasicCard 
                        {...card} 
                        className={cardClassName}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default BasicCardGrid;
