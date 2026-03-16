import React, {useState} from "react";
import GoldLotus from "../assets/Lotus-Gold.svg";
import {useLocation} from "react-router";
import {NavLink} from "react-router-dom";

function Search() {
    let filteredGuestList = [];
    const [list, setList] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const location = useLocation();
    const { guestListJSON } = location.state;

    const searchGuest = (event) => {
        setIsSearching(true);
        filteredGuestList = [];
        setList([...filteredGuestList]);
        event.preventDefault();
        let searchParam = (event.target.searchParam.value);
        if (searchParam) {
            guestListJSON.forEach(guest => {
                if (guest.name.toUpperCase().includes(searchParam.toUpperCase())) {
                    filteredGuestList.push(guest);
                }
            })
        }
        setList([...filteredGuestList]);
    }

    return (
        <div className="container position-absolute top-20">
            <div className="row text-center">
                <form onSubmit={searchGuest}
                onKeyDown={(event) =>
                event.key === "Enter" && searchGuest}>
                <div className="col-12">
                        <input className="input-bar w-75 font-gold" type="text" name="searchParam"/>
                </div>
                    <div className="col-12">
                        <button className="button-gold w-75 fw-bold">Search</button>
                </div>
        </form>
            </div>
            <div className="row text-center">
                <div>
                    {
                        isSearching && <img className="rotate-lotus" src={GoldLotus}/>
                    }
                    {
                        list.length > 0 && <h3>GUEST LIST</h3>
                    }
                    {
                        list.length > 0 && list.map((guest, index) => {
                            return (
                                <div key={index.toString()}>
                                    <b><i>{guest.name}</i></b> in&nbsp;
                                    <b><NavLink to="/table-list" className="font-gold-link"
                                                state={{ guestListJSON: guestListJSON,
                                                    tableNo: guest.table}}>
                                        Row {guest.table}
                                    </NavLink>
                                    </b></div>
                            )
                        })
                    }
                    {
                        list.length <= 0 && isSearching &&
                        <p className="text-center fst-italic">No such guest flying with us today</p>
                    }
                </div>
            </div>
        </div>

    );
}

export default Search;