import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {  // create context provider component and this is to wrap the application
    const [restaurants, setRestaurants] = useState([]); //useState hook to store list of restaurants. An array that fetches from backend server 

    return (
        // in JS, {{restaurants:restaurants}} -first property is restaurants and passing down restaurants- is equivalent to {{restaurants}}. the below line will pass restaurants down
        <RestaurantsContext.Provider value = {{restaurants, setRestaurants}}> 
            {props.children}
        </RestaurantsContext.Provider>
    );
};