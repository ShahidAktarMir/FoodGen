import { useEffect } from "react";
import { IMGID } from "./constant";

const BestOffers = (offers) => {
  console.log(offers);
  return (
    <>
      <div className="h-[217px] w-[344px] bg-slate-400 m-3 rounded-2xl hover:scale-90 transition-all  ease-in-out">
        <img
          src={IMGID + offers.imageId}
          className="object-cover rounded-2xl"
        />
        <div></div>
      </div>
    </>
  );
};
export default BestOffers;
