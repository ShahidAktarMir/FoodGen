import { IMGID } from "./constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  costForTwoString,
  cuisines,
  locality,
}) => {
  return (
    <div className="my-5 mx-5 p-3 h-80 w-60 bg-zinc-50 rounded hover:shadow ">
      <img src={IMGID + cloudinaryImageId} className="rounded mb-5" />
      <div>
        <h3 className="font-medium">{name}</h3>
        <h4>{locality}</h4>
        <p>{cuisines.join(", ")}</p>
        <p className="font-bold">{costForTwoString}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
