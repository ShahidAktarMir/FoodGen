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
    <div className="my-5 mx-5 p-3 h-auto w-60 bg-gray-100 rounded-xl hover:shadow ">
      <img src={IMGID + cloudinaryImageId} className="rounded-t-lg mb-5" />
      <div>
        <h3 className="font-medium">{name}</h3>
        <h4>{locality}</h4>
        <p>
          {cuisines[0]}, {cuisines[1]}
        </p>
        <p>{avgRating}⭐ ⭐ ⭐</p>
        <p className=" text-green-500 mt-2 bg-gray-200 rounded-full p-2 text-center font-semibold">
          ₹{costForTwo / 200}
        </p>
      </div>
    </div>
  );
};
export default RestaurantCard;
