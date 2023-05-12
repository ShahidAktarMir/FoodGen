import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMGID } from "./constant";
import SearchBar from "./SearchBar";

const ResDet = () => {
  const { resID } = useParams();
  const [allMenu, setAllMenu] = useState();
  const [mainRes, setMainRes] = useState();
  const [filterMenu, setFilterMenu] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getRes();
  }, []);

  async function getRes() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56379562768114&lng=88.37036063977736&restaurantId=" +
          resID +
          "&submitAction=ENTER"
      );

      const json = await data.json();
      setMainRes(json?.data?.cards[0]?.card?.card?.info);
      setAllMenu(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card
          .card.itemCards
      );
      setFilterMenu(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card
          .card.itemCards
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  const updateKeyword = (keyword) => {
    const filtered = allMenu.filter((menu) =>
      menu?.card?.info?.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setKeyword(keyword);
    setFilterMenu(filtered);
  };

  return !mainRes ? (
    <h1>Wait for While</h1>
  ) : (
    <>
      <SearchBar keyword={keyword} onChange={updateKeyword} />
      <div className=" m-28 flex space-x-40">
        <div className="bg-slate-100 p-5 rounded-2xl h-full">
          <img
            src={IMGID + mainRes.cloudinaryImageId}
            className="rounded-t-lg mb-10"
          />
          <h1 className="font-semibold">{mainRes.name}</h1>
          <h3 className="">{mainRes.areaName}</h3>
          <h6>{mainRes.city}</h6>
          <h4>Rating: {mainRes.avgRating}</h4>
          <h4>Locality: {mainRes.locality}</h4>
          <p className="text-green-500 mt-10 bg-gray-200 rounded-full p-5 text-center font-semibold">
            ₹ {mainRes.costForTwo / 200}
          </p>
        </div>
        <div>
          <p>
            <b>
              <i>Menus -</i>
            </b>
          </p>
          {filterMenu.map((menu) => {
            return (
              <div className="grid grid-cols-6 gap-4">
                <img
                  src="https://cdn.shopify.com/s/files/1/0050/5508/6656/products/2000px-Indian-vegetarian-mark.svg_aa6ffbb3-9caf-482d-a679-147a3af521b0.png?v=1663136192&width=1946"
                  className="h-5 mt-14"
                />{" "}
                <p className="ml-2 mt-12">
                  {menu?.card?.info?.itemAttribute?.vegClassifier}
                </p>
                <p className="ml-2 mt-10">{menu?.card?.info?.name}</p>
                <img
                  src={IMGID + menu?.card?.info?.imageId}
                  className="h-20 m-5 rounded"
                />
                {/* {console.log(menu?.card?.info?.imageId)} */}
                <p className="mt-10 ml-10">₹{menu?.card?.info?.price / 200}</p>
                <button className="bg-green-300 m-3 ml-10 p-1 h-8 mt-10 ">
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ResDet;
