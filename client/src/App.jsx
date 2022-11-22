import React from 'react';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"; // library
import Home from "./routes/Home" // current directory
import UpdatePage from "./routes/UpdatePage"
import RestaurantDetailPage from "./routes/RestaurantDetailPage"


const App = () => {
    return (
        // the container below keeps the table from taking up the whole webpage width.. contains it.
        <div className="container">           
            <Router>  
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/restaurants/:id/update" element={<UpdatePage/>}/>
                    <Route exact path="/restaurants/:id" element={<RestaurantDetailPage/>}/>
                </Routes>
            </Router>

        </div>
    );
};

export default App;