import { NavLink } from "react-router-dom";
import "./Nav.css";
import SearchBar from "./SearchBar";

const Nav = ({ onSearch, access, setAccess }) => {
  const handChangeLogOut = () => {
    setAccess(false);
  };

  return (
    <div className="Nav">
      <div className="Boton">
        <button className="Button">
          <NavLink to={"/home"}>Home</NavLink>
        </button>
        <button className="Button">
          <NavLink to={"/about"}>About</NavLink>
        </button>
      </div>
      <SearchBar onSearch={onSearch}></SearchBar>
      <button onClick={handChangeLogOut}>Log out</button>
    </div>
  );
};

export default Nav;