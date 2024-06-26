import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand">GlitchFound</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className='nav-link' to="/user">User</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/project">Project</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/issues">Issues</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/projectUser">ProjectUser</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/ticketType">TicketType</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/ticketStatus">TicketStatus</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;