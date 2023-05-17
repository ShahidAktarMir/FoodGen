import { useContext } from "react";
import userContext from "../utils/userContext";
import { IMGID } from "./constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  costForTwo,
  cuisines,
  locality,
  avgRating,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="my-5 mx-5 p-3 h-auto w-60 bg-gray-100 rounded-xl hover:shadow transition-all duration-100 ">
      <img src={IMGID + cloudinaryImageId} className="rounded-t-lg mb-5" />
      <div>
        <h3 className="font-medium">{name}</h3>
        <h4>{locality}</h4>
        <p>
          {cuisines[0]}, {cuisines[1]}
        </p>
        <p>{avgRating}⭐ ⭐ ⭐</p>
        {costForTwo / 200 == NaN ? (
          <p className=" text-green-500 mt-2 bg-gray-200 rounded-full p-2 text-center font-semibold">
            ₹0
          </p>
        ) : (
          <p className=" text-green-500 mt-2 bg-gray-200 rounded-full p-2 text-center font-semibold">
            ₹{costForTwo / 200}
          </p>
        )}
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
