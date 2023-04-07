import { IMGID } from "./constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  costForTwoString,
  cuisines,
  locality,
}) => {
  return (
    <div className="cards">
      <img src={IMGID + cloudinaryImageId} />
      <div>
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwoString}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
