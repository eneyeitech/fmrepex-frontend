import React from "react";
import {NavLink, useHistory} from "react-router-dom";

function Header(props) {
    const activeStyle = {color:"orange"};
    const {isLoggedIn, signOut} = props;
    const history = useHistory();

    function handleSignOut(){
        history.push('/');
        signOut();
    }

    return (
      <>
          <header className="site-header sticky-top py-1">
              <nav className="container d-flex flex-column flex-md-row justify-content-between">
                  <a className="py-2" href="src/components/common/Header#" aria-label="Product">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                           stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto"
                           role="img" viewBox="0 0 24 24"><title>Product</title>
                          <circle cx="12" cy="12" r="10"></circle>
                          <path
                              d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
                      </svg>
                  </a>
                  <NavLink activeStyle={activeStyle} exact to="/" className="py-2 d-none d-md-inline-block" >Home</NavLink>
                  <NavLink activeStyle={activeStyle} exact to="/services" className="py-2 d-none d-md-inline-block">Services</NavLink>
                  <NavLink activeStyle={activeStyle} exact to="/about" className="py-2 d-none d-md-inline-block">About</NavLink>
                  {!isLoggedIn &&
                      (<><NavLink activeStyle={activeStyle} exact to="/signup" className="py-2 d-none d-md-inline-block">Sign
                          Up</NavLink>
                      <NavLink activeStyle={activeStyle} exact to="/login" className="py-2 d-none d-md-inline-block">Login</NavLink></>)
                  }
                  {isLoggedIn &&
                      <NavLink exact to="#" onClick={handleSignOut} className="py-2 d-none d-md-inline-block btn btn-danger">Sign out</NavLink>}
              </nav>
          </header>
      </>
    );
}

export default Header;