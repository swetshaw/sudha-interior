import React from 'react';
import './Navbar.css';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: transparent;
  padding-top: 20px;
  // sticky navbar style
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const StyledNavbarLeft = styled.div`
  margin-left: 48px;
  display: flex;
  align-items: center;
`;
const StyledNavbarRight = styled.div`
  margin-right: 48px;
`;
const StyledNavarLinks = styled.a`
  color: var(--tyrian);
  margin-right: 48px;
  height: 64px;
  cursor: pointer;
  user-select: none;
  &: active {
    // add on click style here
  }
`;

const StyledNavarConsultNowButton = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 4px;
  color: var(--tyrian);
  border: 1px solid var(--tyrian);
  background-color: white;
  cursor: pointer;
  user-select: none;
  font-family: 'Inter';
  font-weight: 600;
`;

const StyledLogo = styled.img``;
const StyledBrandName = styled.div`
  font: 'Poppins';
  font-weight: 600;
  font-size: 24px;
  color: var(--tyrian);
  margin-left: 8px;
`;

const Navbar = () => {
  return (
    <StyledNavbar className='sticky'>
      <StyledNavbarLeft>
        <StyledLogo src="./compass.png" />
        <StyledBrandName>Sudha Interior</StyledBrandName>
      </StyledNavbarLeft>
      <StyledNavbarRight>
        <StyledNavarLinks>Home</StyledNavarLinks>
        <StyledNavarLinks>Shop</StyledNavarLinks>
        <StyledNavarConsultNowButton>Consult Now</StyledNavarConsultNowButton>
      </StyledNavbarRight>
    </StyledNavbar>
  );
};

export default Navbar;
