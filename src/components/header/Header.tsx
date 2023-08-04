
import { StyledNav, StyledNavLink } from "./styled";

const Header = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/active-notes">Active Notes</StyledNavLink>
      <StyledNavLink to="/archived-notes">Archived Notes</StyledNavLink>
      <StyledNavLink to="/summary">Summary</StyledNavLink>
    </StyledNav>
  )
};

export default Header;
