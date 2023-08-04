import { NavLink } from "react-router-dom";

import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2f2f2f;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ffffff;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }

  &.active {
    background-color: #e7e7e7;
    color: #000000;
  }
`;

export { StyledNav, StyledNavLink }
