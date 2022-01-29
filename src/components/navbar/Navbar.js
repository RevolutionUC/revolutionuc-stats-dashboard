import React from 'react';
import NavbarLogo from '../navbar/NavbarLogo';
import NavbarNav from './NavbarNav';
import Nav from './Nav';

const Navbar = function () {
  return (
    <div style={{ position: `fixed`, zIndex: `99` }}>
      <NavbarLogo></NavbarLogo>
      <NavbarNav></NavbarNav>
      {/* <Nav></Nav> */}
    </div>
  );
};

export default Navbar;
