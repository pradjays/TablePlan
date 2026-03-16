import React from 'react';
import NavBar from "./components/NavBar.jsx";
import {Routes, Route} from "react-router";
import Home from "./components/Home.jsx";
import Search from "./components/Search.jsx";
import SeatingPlan from "./components/SeatingPlan.jsx";
import TableList from "./components/TableList.jsx";

function App() {
    return (
        <>
            <NavBar />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/seating-plan" Component={SeatingPlan} />
                    <Route path="/search" Component={Search} />
                    <Route path="/table-list" Component={TableList} />
                </Routes>
        </>

    );
}

export default App;