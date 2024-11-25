import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const CardButton = ({ texto, link, children }) => {
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <Button variant="success" className="btn m-2 p-4" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '150px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                color: 'white',
                fontSize: '25px'
            }}>
                <span>{texto}</span>
                {children}
            </Button>
        </Link>
    )
}

export default CardButton;