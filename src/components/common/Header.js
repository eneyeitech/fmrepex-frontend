import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
    const activeStyle = {color:"orange"};
    const {isLoggedIn, signOut} = props;

    return (
      <>
          <header className="site-header sticky-top py-1">
              <nav className="container d-flex flex-column flex-md-row justify-content-between">
                  <a className="py-2" href="src/components/common/Header#" aria-label="Product">

                      FMRepEx
                  </a>


                  {!isLoggedIn &&
                      (<>
                          <NavLink activeStyle={activeStyle} exact to="/" className="py-2 d-none d-md-inline-block" >Home</NavLink>
                          <NavLink activeStyle={activeStyle} exact to="/services" className="py-2 d-none d-md-inline-block">Services</NavLink>
                          <NavLink activeStyle={activeStyle} exact to="/about" className="py-2 d-none d-md-inline-block">About</NavLink>
                          <NavLink activeStyle={activeStyle} exact to="/signup" className="py-2 d-none d-md-inline-block">Sign
                          Up</NavLink>
                          <NavLink activeStyle={activeStyle} exact to="/login" className="py-2 d-none d-md-inline-block">Login</NavLink>
                      </>)
                  }
                  {isLoggedIn &&
                      <>
                          <NavLink activeStyle={activeStyle} exact to="/dashboard" className="py-2 d-none d-md-inline-block">Dashboard</NavLink>
                      <NavLink exact to="/" onClick={()=>signOut(false)} className="py-2 d-none d-md-inline-block btn btn-danger">Sign out</NavLink>
                      </>
                      }
              </nav>
          </header>
      </>
    );
}

export default Header;