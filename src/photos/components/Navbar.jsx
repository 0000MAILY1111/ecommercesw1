import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="btn-group ">
                    <button type="button" className="btn btn-secondary dropdown-toggle"
                        onClick={toggleDropdown}  aria-haspopup="true" aria-expanded={isOpen} >
                        Menú
                    </button>
                    <div className={`dropdown-menu dropdown-menu-right ${isOpen ? 'show' : ''}`}>
                        <button className="dropdown-item" type="button">Opcion1</button>
                        <button className="dropdown-item" type="button">Opcion2</button>
                        <button className="dropdown-item" type="button">Opcion3</button>
                    </div>
                </div>

                <div className="d-flex text-white mr2 p-2">
                <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/events"> Eventos
                 </NavLink> 
                </div>

                <div className="d-flex text-white mr2 p-2">
                <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/events"> Archivo
                 </NavLink> 
                </div>

                <div className="d-flex text-white mr2 p-2">
                <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/events"> Editar
                 </NavLink> 
                </div>

                <div className="d-flex text-white mr2 p-2">
                <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/events"> Vista
                 </NavLink> 
                </div>

                <div className="d-flex text-white ml-auto mr-2 justify-content-end">

                   <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`} to="/login">
                   </NavLink>
                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/login">
                        Logout
                    </NavLink>
                </div>
            </nav>

        </>
    );
};
export default Navbar;
