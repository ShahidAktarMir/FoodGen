import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import SearchBar from "./SearchBar";

const Body = () => {
  const [allRes, setAllres] = useState();
  const [filterRes, setFilterres] = useState();
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    getRes();
  }, []);

  async function getRes() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.577486&lng=88.38098579999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllres(json?.data?.cards[2]?.data?.data?.cards);
    setFilterres(json?.data?.cards[2]?.data?.data?.cards);
  }
  const updateKeyword = (keyword) => {
    const filtered = allRes.filter((res) =>
      res?.data?.name?.toLowerCase().includes(keyword.toLowerCase())
    );
    setKeyword(keyword);
    setFilterres(filtered);
  };

  if (!allRes) return <Shimmer />;

  return (
    <>
      <SearchBar keyword={keyword} onChange={updateKeyword} />
      <div className="grid grid-cols-6  justify-items-center justify-center ml-28 mr-28">
        {filterRes.map((res) => {
          return (
            <Link to={"/restaurant/" + res?.data?.id} key={res?.data?.id}>
              <RestaurantCard {...res?.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
