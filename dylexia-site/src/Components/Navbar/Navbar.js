import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div to='/' className='logo'>
                    <p>Dyslexia Awareness</p>
                </div>

                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/info-dyslexia' className='nav-links'>
                            Information on Dyslexia
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/info-project' className='nav-links'>
                            Information on Project
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/predictor' className='nav-links'>
                            Dyslexia Predictor
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar;