import React from 'react';
import image from '../assets/images/logo-DH.png';
import {NavLink} from 'react-router-dom'

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <NavLink className="nav-link collapsed" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                     </NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Genre -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Género</span>
                    </NavLink>
                </li>

                {/*<!-- Nav Item - Last Movie -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultima película</span>
                    </NavLink>
                </li>

                {/*<!-- Nav Item - Metric -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Métricas</span>
                    </NavLink>
                </li>

                {/*<!-- Nav Item - Chart -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Películas</span>
                    </NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>

                
            </ul>
           
        </React.Fragment>
    )
}
export default SideBar;