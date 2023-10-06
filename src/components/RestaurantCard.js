import { IMGID } from "./constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  costForTwo,
  cuisines,
  locality,
  avgRating,
}) => {
  return (
    <div
      className="mb-4 h-[300px]  w-[300px] m-auto sm:h-[280px] sm:w-[280px] md:h-[250px] md:w-[200px] 
    xl:h-[300px] xl:w-[300px] 
    rounded-xl hover:shadow-xl transition-all duration-300 p-1  hover:scale-105  group"
    >
      <img
        src={IMGID + cloudinaryImageId}
        className="rounded-2xl object-cover group-hover:rounded-sm  transition-all duration-800 "
      />

      <div className="pl-2 mt-5">
        <h3 className="font-medium">{name}</h3>
        <h4>{locality}</h4>
        {/* <p>{cuisines[0]}</p> */}
        <p>{avgRating}⭐ ⭐ ⭐</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
