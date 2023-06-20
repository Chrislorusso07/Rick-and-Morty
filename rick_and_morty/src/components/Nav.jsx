import SearchBar from "./SearchBar";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return(
        <div className = "Nav" >
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to="/about">About</Link>
            </button>
            <button>
                <Link to= "/home">Home</Link>
            </button>
        </div>
    )
}

export default Nav;