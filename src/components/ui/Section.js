import React from 'react';
import { Container } from 'react-bootstrap';
import SectionHeader from './SectionHeader';

const Section = ({ id, title, description, bgColor = 'var(--helio-bg-white)', children }) => {
    return (
        <section id={id} className="py-5" style={{ backgroundColor: bgColor }}>
            <Container>
                <SectionHeader title={title} description={description} />
                {children}
            </Container>
        </section>
    );
};

export default Section;
