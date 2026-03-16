import {useLocation} from "react-router";

function SeatingPlan() {
    const location = useLocation();
    const {guestList} = location.state;

    return (
        <div className="row p-4">
            <h2>Seat Allocation</h2>
            {guestList.length > 0 &&
                guestList.map(item => {
                    return (
                        <div className="accordion accordion-flush" id={"fullList" + item.letter}
                             key={"fullList" + item.letter}>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={item.letter}>
                                    <button className="accordion-button collapsed accordion-button-gold fw-bold"
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target={"#listOf" + item.letter} aria-expanded="false"
                                            aria-controls={"listOf" + item.letter}>
                                        Your Name Begins With {item.letter}
                                    </button>
                                </h2>
                                <div id={"listOf" + item.letter} className="accordion-collapse collapse"
                                     aria-labelledby={item.letter} data-bs-parent={"fullList" + item.letter}>
                                    <div className="accordion-body bg-beige">
                                        {item.nameList.length > 0 &&
                                            item.nameList.map((guest, index) => {
                                                return (
                                                    <div key={index} className="font-gold">
                                                        <b>{guest.name}</b> in Row <b>{guest.table}</b>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SeatingPlan;