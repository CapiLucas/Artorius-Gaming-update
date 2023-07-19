import React from 'react';
import CartWidget from './cartWidget';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="#">
            <img src="../images/logo.png" alt="Logo" width="60" height="60" className="d-inline-block align-text-top" />
            Artorius Gaming
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button className="nav-link" >Computadoras</button>
            <button className="nav-link" >Monitores</button>
            <button className="nav-link" >Gabinetes</button>
            <button className="nav-link" >Notebooks</button>
            <a><CartWidget/></a>
          </div>
        </div>
        <div className='UserIcon'>
          <a href='#'><AccountCircleIcon sx={{ color: 'papayawhip' }} fontSize='large'/></a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;