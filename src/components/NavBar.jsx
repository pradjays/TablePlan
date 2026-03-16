import Lotus from '/src/assets/Lotus.svg';
import {NavLink} from "react-router-dom";
import axios from "axios";
import * as commonUtils from "../commonUtils.js";
import {useEffect, useState} from "react";
import * as constantList from "../constants.js";

function NavBar() {
    const sheetURL = constantList.seatingPlanURL;
    const [guestData, setGuestData] = useState([]);
    const [orderedGuestData, setOrderedGuestData] = useState([]);

    const fetchCSVData = () => {
        axios.get(sheetURL)
            .then((response) => {
                const parsedCsvData = commonUtils.parseCSVtoJSON(response.data);
                setGuestData(parsedCsvData);
                const orderedData = commonUtils.parseCSVtoOrderedList(response.data);
                setOrderedGuestData(orderedData);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchCSVData();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg position-absolute bg-gold font-beige start-0 top-0 w-100">
            <div className="container">
                <div className="row align-items-start d-inline-flex">
                    <NavLink className="p-3 font-beige" to="/">Home</NavLink>
                </div>
                <div className="row align-items-start d-inline-flex">
                    <NavLink className="p-3 font-beige" to="/seating-plan" state={{ guestList : orderedGuestData}}>Seating Plan</NavLink>
                </div>
                <div className="row align-content-between d-inline-flex">
                    <NavLink className="p-3 font-beige" to="/search" state={{ guestListJSON: guestData}}>Search</NavLink>
                </div>
                <div className="row align-items-end">
                    <img className="rotate-lotus" src={Lotus}/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;