{/*
    // Optional Chaining

    const RestorantCard = (props) =>
{
  
    const {resData} = props;

    const {
            imageUrl,
            name,
            cuisines,
            avgRating,
            costForTwo,
            deliveryTime,
            } = resData?.data;


    return (
        <div className="res-card" style={{ backgroundColor:"#b6bcbcff"}}>
            <img 
            className="res-logo"
            alt="res-logo" 
            src={imageUrl}
            />
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating} </h4>
            <h4>{costForTwo} FOR TWO</h4>
            <h4>{deliveryTime} Minutes</h4>
            <h4>38 Minutes</h4>

        </div>
    )
}
     */}


const RestorantCard = (props) =>
{
  
    const {resData} = props;
    return (
        <div className="res-card" style={{ backgroundColor:"#d1dbdbff"}}>
            <img 
            className="res-logo"
            alt="res-logo" 
            src={resData.data.imageUrl}
            />
            <h3>{resData.data.name}</h3>
            <h3>{resData.data.cuisines.join(",")}</h3>
            <h4>{resData.data.avgRating} </h4>
            <h4>{resData.data.costForTwo / 100} FOR TWO</h4>
            <h4>{resData.data.deliveryTime} Minutes</h4>
            <h4>38 Minutes</h4>

        </div>
    )
}

export default RestorantCard;