import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import './DashboardLayout.css';

const DashboardLayout = () => {
    return (
        <div className="dashboard-wrapper">
            {/* Top Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg" className="dashboard-navbar">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/dashboard">HelioAndes Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/">Volver al Sitio</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid className="dashboard-container">
                <Row className="flex-nowrap">
                    {/* Sidebar */}
                    <Col xs={2} id="sidebar-wrapper" className="bg-light border-end min-vh-100 px-0">
                        <div className="sidebar-heading py-4 px-3 fs-5 fw-bold border-bottom">Menú</div>
                        <div className="list-group list-group-flush">
                            <Link to="/dashboard/services" className="list-group-item list-group-item-action bg-light">
                                <i className="bi bi-grid-fill me-2"></i> Servicios
                            </Link>
                            <Link to="/dashboard/plans" className="list-group-item list-group-item-action bg-light">
                                <i className="bi bi-card-checklist me-2"></i> Planes
                            </Link>
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col xs={10} id="page-content-wrapper" className="p-4">
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashboardLayout;
