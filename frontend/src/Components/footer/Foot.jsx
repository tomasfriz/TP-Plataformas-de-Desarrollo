import React from 'react';
import { Container } from 'react-bootstrap';


const Foot = () => {
    return (
        <footer className="text-center text-white py-3" style={{
            backgroundColor: 'var(--custom-black)',
        }}>
            <Container>
                <small>&copy;2024 NEXOSPORT. Todos los derechos reservados.</small>
            </Container>
        </footer>
    )
}

export default Foot;