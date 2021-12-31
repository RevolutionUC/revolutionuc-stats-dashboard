import React from 'react';
import NavbarLogo from '../navbar/NavbarLogo';
import NavbarNav from './NavbarNav';

const Navbar = function () {
  return (
    <div style={{ position: `fixed`, zIndex: `99` }}>
      <NavbarLogo></NavbarLogo>
      <NavbarNav></NavbarNav>
    </div>
  );
};

export default Navbar;
