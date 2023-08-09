import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex w-full justify-evenly items-center bg-background py-2 mb-4 border-b-2 border-primary">
      <NavLink
        to="/active-notes"
        className={({ isActive }) =>
          `${
            isActive ? "bg-secondary text-black" : "text-primary"
          } text-lg font-bold px-4 py-2 rounded transition duration-300 hover:bg-primary hover:text-black`
        }
      >
        Active Notes
      </NavLink>
      <NavLink
        to="/archived-notes"
        className={({ isActive }) =>
          `${
            isActive ? "bg-secondary text-black" : "text-primary"
          } text-lg font-bold px-4 py-2 rounded transition duration-300 hover:bg-primary hover:text-black`
        }
      >
        Archived Notes
      </NavLink>
      <NavLink
        to="/summary"
        className={({ isActive }) =>
          `${
            isActive ? "bg-secondary text-black" : "text-primary"
          } text-lg font-bold px-4 py-2 rounded transition duration-300 hover:bg-primary hover:text-black`
        }
      >
        Summary
      </NavLink>
    </nav>
  );
};

export default Header;
