import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '/logo.png';
import UserMenu from '../userMenu/UserMenu';



const Nav = () => {
    return (
        <Navbar className="p-3" style={{
            backgroundColor: 'var(--custom-black)',
        }}>
        <Container>
            <Navbar.Brand href="/" style={{
            color: 'var(--custom-white)',
        }}>
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
                    <UserMenu></UserMenu>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Nav;
