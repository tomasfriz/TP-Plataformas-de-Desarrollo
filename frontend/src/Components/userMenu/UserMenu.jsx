import React from 'react';
import { Dropdown } from 'react-bootstrap';

function UserMenu() {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="dark" id="dropdown-basic" className=" border-0">
      <i className="bi bi-person-circle" style={{ fontSize: '1.5rem', color: 'white' }}></i>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ backgroundColor: '#343a40', color: 'white' }} >
        <Dropdown.Item href="/myEvents">Mis Eventos</Dropdown.Item>
        <Dropdown.Item href="/organize" >Organizar Evento</Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => alert('Cerrar sesión')}>Cerrar Sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserMenu;