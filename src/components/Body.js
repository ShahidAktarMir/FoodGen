import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import filter from "../utils/helperFunction";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRes, setAllres] = useState();
  const [filterRes, setFilterres] = useState();
  const [searchText, setSearchtext] = useState();
  const isOnline = useOnline();

  useEffect(() => {
    getRes();
  }, []);

  async function getRes() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllres(json?.data?.cards[2]?.data?.data?.cards);
    setFilterres(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRes) return null;
  if (filterRes.length == 0)
    return <h1>No Restaurant Found - ""{searchText}""</h1>;

  return allRes.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center mt-10 mb-10">
        <div>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-100 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              onChange={(e) => {
                setSearchtext(e.target.value);
                const data = filter(searchText, allRes);
                setFilterres(data);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const data = filter(searchText, allRes);
                  setFilterres(data);
                }
              }}
              class="block w-96 p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50   dark:placeholder-gray-400 dark:text-gray-800  "
              placeholder="Search by names"
            />
            <button
              type="submit"
              onClick={() => {
                const data = filter(searchText, allRes);
                setFilterres(data);
              }}
              class="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>
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
