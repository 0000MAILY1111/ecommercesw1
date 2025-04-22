import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    {/* Botón de menú desplegable */}
                    <div className="btn-group me-2">
                        <button 
                            type="button" 
                            className="btn btn-secondary dropdown-toggle"
                            onClick={toggleDropdown} 
                            aria-haspopup="true" 
                            aria-expanded={isOpen}
                        >
                            Menú
                        </button>
                        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                            <button className="dropdown-item" type="button">Opcion1</button>
                            <button className="dropdown-item" type="button">Opcion2</button>
                            <button className="dropdown-item" type="button">Opcion3</button>
                        </div>
                    </div>

                    {/* Botón de hamburguesa para dispositivos móviles */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded={!isNavCollapsed ? true : false} 
                        aria-label="Toggle navigation"
                        onClick={handleNavCollapse}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Contenido colapsable del navbar */}
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/events">
                                    Eventos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/archivo">
                                    Archivo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/editar">
                                    Editar
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/vista">
                                    Vista
                                </NavLink>
                            </li>
                        </ul>
                        
                        {/* Botón de Logout alineado a la derecha */}
                        <div className="d-flex">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/login">
                                Logout
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;