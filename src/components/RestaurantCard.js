const RestaurantCard = ({name,cloudinaryImageId,costForTwoString,cuisines,locality}) =>{
    return(
        <div className="cards">
        <h1>{name}</h1>
        <h1>{locality}</h1>
        </div>
    );
}
export default RestaurantCard;