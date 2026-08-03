import RestorantCard from "./RestaurantCard"; 
import resList from "../utils/mockData"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";






const Body = () =>
{
    const [listOfResaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
    const response = await fetch(
        //"https://6a6f445da7e173d95e458a64.mockapi.io/RestaurantData"
        "https://6a706b6055c0ce38c3264648.mockapi.io/Data"
        
    );

    const json = await response.json();
    console.log(json);
     setListOfRestaurants(json);  

    
    };

    // Conditional Rendering 
    
    if(listOfResaurants.length === 0)
     {
        return;
     }
    
    return listOfResaurants.length === 0 ?(
        <Shimmer/>
    ) : (
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