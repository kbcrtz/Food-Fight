import { useContext, useEffect } from "react";
import { YelpContext } from "../context/YelpContext";

function Bracket(){
    const {restaurants} = useContext(YelpContext);
    useEffect(()=>{
        console.log("Restaurants in Bracket", restaurants)
    }, [])

    return<div>
        {
  restaurants.length > 0 ? (
    <div>
        {restaurants.map((restaurant, index)=> (
        <h1 key={index}>{restaurant.name} </h1>
        )
    )}
    </div>
  ) : (
    <p>No restaurants found or data still loading...</p>
  )
}

    </div>
}
export default Bracket;