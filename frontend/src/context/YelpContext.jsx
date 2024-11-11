import { createContext, useState } from "react";

export const YelpContext = createContext();
export const YelpProvider = ({children})=> {
    const [restaurants, setRestaurants] = useState([]);
    return (
        <YelpContext.Provider value={{restaurants, setRestaurants}}>
            {children}
        </YelpContext.Provider>
    );

};