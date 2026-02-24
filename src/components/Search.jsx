import guestList from '../assets/GuestList.json';

function Search() {
    let foundList = [];
    const searchGuest = () => {
        console.log(document.getElementById('nameInput'))
        foundList = [];
        if (document.getElementById('nameInput')) {
            guestList.forEach(guest => {
                if (guest.name.includes(name)) {
                    foundList.push(guest);
                }
            })
        }
        console.log(foundList);
    }

    return (
        <>
            <div className="row font-gold">
                <input type="text" id="nameInput"/>
                <button className="btn btn-primary btn-lg" onClick={searchGuest()}>Search</button>
                <div>
                    {
                        foundList.length > 0 && foundList.map((guest) => {
                            <li>{guest.name} - {guest.table}</li>
                        })
                    }
                </div>
            </div>
        </>

    );
}

export default Search;