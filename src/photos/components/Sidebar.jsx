import React from 'react';

const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-dark">
            <div className="position-sticky vh-100">
                <div className="list-group list-group-flush mx-3 mt-4">

                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white" aria-current="true">
                        <i className="fas fa-user fa-fw me-3"></i><span>Usuario</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white active">
                        <i className="fas fa-chart-area fa-fw me-3"></i><span>Centros de Salud</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-chart-line fa-fw me-3"></i><span>Lugares Turisticos</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-chart-line fa-fw me-3"></i><span>Bibliotecas</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-chart-pie fa-fw me-3"></i><span>Espacios publicos</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-chart-bar fa-fw me-3"></i><span>Areas Recreativas</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-calendar fa-fw me-3"></i><span>Colegios</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple bg-dark text-white">
                        <i className="fas fa-users fa-fw me-3"></i><span>Centros Comerciales</span>
                    </a>
                   
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;