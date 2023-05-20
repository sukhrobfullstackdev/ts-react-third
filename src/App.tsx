import React from 'react';
import {Navbar} from "./components/Navbar";
import {Routes, Route,} from "react-router-dom"
import {DeadlinesPage} from "./pages/DeadlinesPage";
import {AboutPage} from "./pages/AboutPage";

// React.FC for functional component
// React.ClassicComponent for Class component
const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<DeadlinesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </>
    );
};

export default App;