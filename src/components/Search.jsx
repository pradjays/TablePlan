import guestList from '../assets/GuestList.json';
import {useState} from "react";

function Search() {
    let filteredGuestList = [];
    const [list, setList] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const searchGuest = (event) => {
        setIsSearching(true);
        filteredGuestList = [];
        setList([...filteredGuestList]);
        event.preventDefault();
        let searchParam = (event.target.searchParam.value);
        if (searchParam) {
            guestList.forEach(guest => {
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
                        <input className="input-bar w-75" type="text" name="searchParam"/>
                </div>
                    <div className="col-12">
                        <button className="button-gold w-75">Search</button>
                </div>
        </form>
            </div>
            <div className="row text-center">
                <div>
                    {
                        list.length > 0 && <h3>GUEST LIST</h3>
                    }
                    {
                        list.length > 0 && list.map((guest, index) => {
                            return (
                                <div key={index.toString()}>
                                    <b><i>{guest.name}</i></b> at <b>Table {guest.table}</b></div>
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