import guestList from '../assets/GuestList.json';
import {useState} from "react";

function Search() {
    let filteredGuestList = [];
    const [list, setList] = useState([]);

    const searchGuest = (event) => {
        filteredGuestList = [];
        setList([...filteredGuestList]);
        console.log(list);
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
        // console.log(filteredGuestList);
        console.log(list);
    }

    return (
        <>
            <div className="row font-gold">
                <form onSubmit={searchGuest}>
                    <input type="text" name="searchParam" />
                    <button className="btn btn-primary btn-lg">Search</button>
                </form>

                <div>
                    {
                        list.length > 0 && <h3>GUEST LIST</h3>
                    }
                    {
                        list.length > 0 && list.map((guest, index) => {
                            return (
                                <li id={index}>{guest.name} - {guest.table}</li>
                            )
                        })
                    }
                </div>
            </div>
        </>

    );
}

export default Search;