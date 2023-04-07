import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMGID } from "./constant";
import useRestaurant from "../utils/useRestaurant";
const ResDet = () => {
  const { resID } = useParams();
  const resInfo = useRestaurant(resID);
  const {
    name,
    areaName,
    cloudinaryImageId,
    costForTwo,
    avgRating,
    city,
    locality,
    id,
  } = resInfo;
  return (
    <div className="fullDetails">
      <div>
        <img src={IMGID + cloudinaryImageId} />
      </div>
      <div className="Details">
        <h1>{name}</h1>
        <h3>{areaName}</h3>
        <h4>{city}</h4>
        <h4>Rating: {avgRating}</h4>
        <h4>Locality: {locality}</h4>
        <h2>Price: ₹{costForTwo / 200}</h2>
        <button className="buy">Buy Now</button>
      </div>
      <div>
        <p>
          <b>
            <i>ID: {id}</i>
          </b>
        </p>
      </div>
    </div>
  );
};
export default ResDet;
