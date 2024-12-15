import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";

const EventItem = ({ evento, onClick }) => {
    return (
        <ListGroup.Item
            action
            onClick={onClick}
            className="d-flex align-items-center mb-3"
            style={{
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Card.Img
                variant="left"
                src={evento.imagen}
                style={{ width: "150px", height: "80px", objectFit: "cover", marginRight: "15px" }}
            />
            <div className="flex-grow-1">
                <h5>{evento.nombre}</h5>
                <p className="text-muted mb-1">
                    <i className="bi bi-geo-alt"></i> {evento.ubicacion}
                </p>
                <div>
                    {evento.jugadores && (
                        <Badge className="me-1" style={{ backgroundColor: "var(--custom-green) !important", color: "var(--custom-white) !important" }}>
                            {evento.jugadores}
                        </Badge>
                    )}
                    <Badge className="me-1" style={{ backgroundColor: "var(--custom-green) !important", color: "var(--custom-white) !important" }}>
                        {evento.nivel}
                    </Badge>
                    <Badge style={{ backgroundColor: "var(--custom-green) !important", color: "var(--custom-white) !important" }}>
                        {evento.genero}
                    </Badge>
                </div>
            </div>
        </ListGroup.Item>
    );
};

export default EventItem;
