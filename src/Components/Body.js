import RestorantCard from "./RestaurantCard"; 
import resList from "../utils/mockData";
import { useState } from "react";





const Body = () =>
{
    const [listOfResaurants, setListOfRestaurants] = useState(resList);
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                const filteredList = listOfResaurants.filter(
                    (res) => res.data.avgRating > 4
                );

                setListOfRestaurants(filteredList);
                }}
                >Top Rated Restorants
                </button>

            </div>
            <div className="res-container">
                {/*<RestorantCard resData={resList[0]}/>*/}


                {listOfResaurants.map((restaurant) => (
                    <RestorantCard key={restaurant.data.id} resData={restaurant} />
                ))}
                
            </div>
        </div>
    )
}

export default Body;