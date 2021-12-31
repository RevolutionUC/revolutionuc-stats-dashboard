import React, { useState } from 'react';
import styled from 'styled-components';
import NavButton from '../buttons/NavButton';
import { Link } from 'react-router-dom';

const StyledSectionLabel = styled.div`
  color: white;
  font-size: 1.2rem;
  padding-bottom: 1rem;
`;

const StyledRow = styled.div`
  position: absolute;
  top: 14rem;
  left: 2rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const NavbarNav = function () {
  const [activeLink, setActiveLink] = useState('Live');

  return (
    <div>
      <StyledRow>
        <StyledSectionLabel>Dashboards</StyledSectionLabel>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <NavButton
            label="Live"
            checked={activeLink === 'Live' ? true : false}
            setData={setActiveLink}
          ></NavButton>
        </Link>
        <Link to="/yearly" style={{ textDecoration: 'none' }}>
          <NavButton
            label="Yearly"
            checked={activeLink === 'Yearly' ? true : false}
            setData={setActiveLink}
          ></NavButton>
        </Link>
        <Link to="/trends" style={{ textDecoration: 'none' }}>
          <NavButton
            label="Trends"
            checked={activeLink === 'Trends' ? true : false}
            setData={setActiveLink}
          ></NavButton>
        </Link>
      </StyledRow>
    </div>
  );
};

export default NavbarNav;
