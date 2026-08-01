import RestorantCard from "./RestaurantCard"; 
import resList from "../utils/mockData";




const Body = () =>
{
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                console.log("Button Clicked");
                }}>Top Rated Restorants</button>
            </div>
            <div className="res-container">
                {/*<RestorantCard resData={resList[0]}/>*/}


                {resList.map((restaurant) => (
                    <RestorantCard key={restaurant.data.id} resData={restaurant} />
                ))}
                
            </div>
        </div>
    )
}

export default Body;