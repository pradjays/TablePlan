import React from 'react';
import NavBar from "./components/NavBar.jsx";
import {Routes, Route} from "react-router";
import Home from "./components/Home.jsx";
import Search from "./components/Search.jsx";

function App() {
    return (
        <>
            <NavBar />
            {/*<Router>*/}
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/seating-plan" Component={Home} />
                    <Route path="/search" Component={Search} />
                </Routes>
            {/*</Router>*/}
        </>

    );
}

export default App;