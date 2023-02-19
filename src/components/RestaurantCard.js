import { IMGID } from "./constant";

const RestaurantCard = ({name,cloudinaryImageId,costForTwoString,cuisines,locality}) =>{
    return(
        <div className="cards">
        <img src={IMGID+cloudinaryImageId}/>
        <div>
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h4>{cuisines.join(', ')}</h4>
        <p>{costForTwoString}</p>
        </div>
        
        </div>
    );
}
export default RestaurantCard;