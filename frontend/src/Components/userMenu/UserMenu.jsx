import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function UserMenu() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const rol = parseInt(sessionStorage.getItem('rol'), 10);
        setIsAdmin(rol === 1);
    }, []);

    const styles = {
        dropdownToggle: {
            backgroundColor: 'var(--custom-black)',
            border: 'none',
            color: 'var(--custom-white)',
            fontSize: '1.2rem',
        },
        dropdownMenu: {
            backgroundColor: 'var(--custom-black)',
            color: 'var(--custom-white)',
        },
        dropdownItem: {
            color: 'var(--custom-white)',
            transition: 'background-color 0.3s ease, color 0.3s ease',
        },
        dropdownItemHover: {
            backgroundColor: 'var(--custom-green)',
            color: 'var(--custom-black)',
        },
    };

    return (
        <Dropdown align="end">
            <Dropdown.Toggle
                id="dropdown-basic"
                style={styles.dropdownToggle}
                onMouseOver={(e) => (e.target.style.backgroundColor = 'var(--custom-black)')}
                onMouseOut={(e) => (e.target.style.backgroundColor = 'var(--custom-black)')}
            >
                <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
            </Dropdown.Toggle>

            <Dropdown.Menu style={styles.dropdownMenu}>
                <Dropdown.Item
                    href="/myEvents"
                    style={styles.dropdownItem}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor;
                        e.target.style.color = styles.dropdownItemHover.color;
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = styles.dropdownMenu.backgroundColor;
                        e.target.style.color = styles.dropdownItem.color;
                    }}
                >
                    Mis Eventos
                </Dropdown.Item>
                <Dropdown.Item
                    href="/organize"
                    style={styles.dropdownItem}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor;
                        e.target.style.color = styles.dropdownItemHover.color;
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = styles.dropdownMenu.backgroundColor;
                        e.target.style.color = styles.dropdownItem.color;
                    }}
                >
                    Organizar Evento
                </Dropdown.Item>

                {isAdmin && (
                    <Dropdown.Item
                        href="/adminPanel"
                        style={styles.dropdownItem}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor;
                            e.target.style.color = styles.dropdownItemHover.color;
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = styles.dropdownMenu.backgroundColor;
                            e.target.style.color = styles.dropdownItem.color;
                        }}
                    >
                        Panel de administrador
                    </Dropdown.Item>
                )}

                <Dropdown.Item
                    href="/login"
                    style={styles.dropdownItem}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor;
                        e.target.style.color = styles.dropdownItemHover.color;
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = styles.dropdownMenu.backgroundColor;
                        e.target.style.color = styles.dropdownItem.color;
                    }}
                >
                    Cerrar Sesión
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default UserMenu;
