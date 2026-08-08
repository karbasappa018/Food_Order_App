import RestorantCard from "./RestaurantCard"; 
import resList from "../utils/mockData"
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";






const Body = () =>
{
    const [listOfResaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[]);
    

    const fetchData = async () => {
    const response = await fetch(
        //"https://6a6f445da7e173d95e458a64.mockapi.io/RestaurantData"
        //"https://6a706b6055c0ce38c3264648.mockapi.io/Data"
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.14630&lng=79.08490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        
    );

    const json = await response.json();
   
    //  setListOfRestaurants(json);
    //  setFilteredRestaurant(json); 

    const restaurantCard = json.data.cards.find(
    (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
    restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log(restaurants);

    setFilteredRestaurant(restaurants);
    setListOfRestaurants(restaurants);
        
    
    };

    return listOfResaurants.length === 0 ?(
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                    className="search-box"
                    value={searchText}
                    onChange={(e) =>{
                        setSearchText(e.target.value);
                    }}

                    />

                    <button 
                    onClick={ () => {
                        const filteredRestaurant = listOfResaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={()=> {
                const filteredList = listOfResaurants.filter(
                    // 
                    (res) => res.info.avgRating > 4
                );

                setFilteredRestaurant(filteredList);
                }}
                >Top Rated Restorants
                </button>


            </div>
            <div className="res-container">
                {/*<RestorantCard resData={resList[0]}/>*/}


                {filteredRestaurant.map((restaurant) => (
                    <RestorantCard key={restaurant.info.id} resData={restaurant} />
                ))}
                
            </div>
        </div>
    )
}

export default Body;