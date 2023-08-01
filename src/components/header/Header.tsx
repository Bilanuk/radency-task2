import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/active-notes">Active Notes</NavLink>
      <NavLink to="/archived-notes">Archived Notes</NavLink>
      <NavLink to="/summary">Summary</NavLink>
    </nav>
  )
};

export default Header;
