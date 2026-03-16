import {useLocation} from "react-router";

function TableList() {
    const location = useLocation();
    const guestListJSON = location.state.guestListJSON;
    const tableNo = location.state.tableNo;

    return (
        <div className="p-4">
            <h3 className="fw-bold">Guests In Row {tableNo}</h3>
            {
                guestListJSON.length > 0 &&
                guestListJSON.map((guest, index) => {
                    let counter = 0;
                    if(guest.table === tableNo) {
                        counter++;
                        return (
                            <div className="font-gold" key={index}>
                                {counter}. {guest.name}
                            </div>
                        );
                    }
                })
            }
        </div>
    );
}

export default TableList;