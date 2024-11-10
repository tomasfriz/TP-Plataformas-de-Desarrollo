import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '/logo.png';



const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark" className="p-3">
        <Container>
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="NEXOSPORT logo"
                />{' '}
                NEXOSPORT
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <i className="bi bi-person-circle" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Nav;
