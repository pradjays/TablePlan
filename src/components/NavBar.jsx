import Lotus from '/src/assets/Lotus.svg';
import Search from "./Search.jsx";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg position-absolute bg-gold font-beige start-0 top-0 w-100">
            <div className="container">
                <div className="row align-items-start d-inline-flex">
                    <NavLink className="p-3" to="/">Home</NavLink>
                </div>
                <div className="row align-items-start d-inline-flex">
                    <NavLink className="p-3" to="/seating-plan">Seating Plan</NavLink>
                </div>
                <div className="row align-content-between d-inline-flex">
                    <NavLink className="p-3" to="/search">Search</NavLink>
                </div>
                <div className="row align-items-end">
                    <img className="rotate-lotus" src={Lotus}/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;