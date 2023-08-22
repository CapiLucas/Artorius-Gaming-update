import React from 'react';
import CartWidget from './cartWidget';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div>
          <Link className="navbar-brand" to="/">
            <img src="../images/logo.png" alt="Logo" width="60" height="60" className="d-inline-block align-text-top" />
            Artorius Gaming
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/productos/pc'><button className="nav-link" >Computadoras</button></Link>
            <Link to='/productos/Monitores'><button className="nav-link" >Monitores</button></Link>
            <Link to='/productos/Gabinetes'><button className="nav-link" >Gabinetes</button></Link>
            <Link to='/productos/Notebooks'><button className="nav-link" >Notebooks</button></Link>
            <CartWidget/>
          </div>
        </div>
        <div className='UserIcon'>
          <AccountCircleIcon sx={{ color: 'papayawhip' }} fontSize='large'/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;