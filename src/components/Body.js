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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5691389&lng=88.4338776&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllres(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterres(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const updateKeyword = (keyword) => {
    const filtered = allRes.filter((res) =>
      res?.info?.name?.toLowerCase().includes(keyword.toLowerCase())
    );
    setKeyword(keyword);
    setFilterres(filtered);
  };
  if (!allRes) return <Shimmer />;

  return (
    <div className="m-0 p-5">
      <SearchBar keyword={keyword} onChange={updateKeyword} />
      {filterRes.length == 0 ? (
        <h1 className="rounded-md p-5 bg-rose-300 m-10">
          No Restaurant Found - {keyword}
        </h1>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      "
        >
          {filterRes.map((res) => {
            return (
              <Link to={"/restaurant/" + res?.info?.id} key={res?.info?.id}>
                <RestaurantCard {...res?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Body;
