import { useState, useEffect } from "react";
const useRestaurant = (resID) => {
  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    getDetails();
  }, []);
  async function getDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56379562768114&lng=88.37036063977736&restaurantId=" +
        resID +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
  }
  return resInfo;
};
export default useRestaurant;
