import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './NavbarHeader.module.css';
import Former from '../registration/Former';
import { FaListUl } from 'react-icons/fa';
// import RegBody from './RegBody';
import { Link } from 'react-router-dom';
import { Login } from '../login/Login';


function NavbarHeader() {
  // const [active,setactive] = useState("false");
  const [activelog,setactivelog] = useState("false");
  return (
    <div>
        <nav className={`${"navbar navbar-expand-md"} ${classes.navbarBG}`}>
          <div className={classes.navbarLogo}>
            <img className={classes.brandLogo} src={require('../img/locuscetlogo.png')} alt='brandLogo'></img>
          </div>
          <button className={`${"navbar-toggler"} ${classes.togglerButton} `} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          
          <FaListUl/>
          </button>
          <div className={`${"collapse navbar-collapse"} ${classes.navList}`} id="navbarNav">
            <ul className={`${"navbar-nav"} ${classes.navBarList}`}>
              {/* <li className={`${"nav-item active"} ${classes.navItem}`}>
                <a className="nav-link" href="#"  onClick={() => setactive(!active) }> 
                Register <span className="sr-only">(current)</span></a>
                {!active && <Former/>}
              </li> */}
              <li className={`${"nav-item"} ${classes.navItem}`}>
                <a className="nav-link" href="#"  onClick={() => setactivelog(!activelog) }>Log In</a>
                {!activelog && <Login setactivelog={setactivelog} activelog={activelog} />}
              </li>
              <li className={`${"nav-item"} ${classes.navItem}`}>
                <a className="nav-link" href="#whoarewe">About Us</a>
              </li>
              <li className={`${"nav-item"} ${classes.navItem}`}>
                <a className="nav-link" href="#contact" >Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default NavbarHeader;