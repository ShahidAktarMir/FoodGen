import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMGID } from "./constant";
import SearchBar from "./SearchBar";
import Shimmer2 from "./ShimmerUI2";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Cart";

const ResDet = () => {
  const { resID } = useParams();
  const [allMenu, setAllMenu] = useState();
  const [mainRes, setMainRes] = useState();
  const [filterMenu, setFilterMenu] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const addCart = (menu) => {
    dispatch(addItem(menu));
  };
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
      console.log(json);
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
    <Shimmer2 />
  ) : (
    <>
      <div className="flex flex-wrap flex-col">
        <div className="flex flex-wrap justify-between m-auto mt-5 items-center rounded-3xl p-10 bg-gradient-to-bl from-rose-300 via-rose-400 to-rose-600 text-white ">
          <div className="m-5">
            <h1 className="font-extrabold text-2xl">{mainRes.name}</h1>
            <h3 className="font-mono">
              {mainRes.locality},{mainRes.areaName}
            </h3>
            <h6 className="font-medium">{mainRes.city}</h6>
            <h4>{mainRes.avgRating}</h4>
          </div>
          <div className="m-auto mb-5">
            <img
              src={IMGID + mainRes.cloudinaryImageId}
              className="h-[217px] w-[344px] rounded-3xl"
            />
          </div>
        </div>
        <div className="m-5">
          <p className="border-b-2 border-orange-400 font-extrabold  text-2xl ">
            Menus
          </p>
          <div>
            <SearchBar keyword={keyword} onChange={updateKeyword} />
          </div>

          {!filterMenu ? null : filterMenu.length == 0 ? (
            <h1>No Menus Found - {keyword}</h1>
          ) : (
            filterMenu.map((menu) => {
              return (
                <div className="flex flex-wrap flex-row justify-between items-center mb-2  p-5 rounded-lg w-[80%] m-auto border-b-2 border-yellow-200">
                  {menu?.card?.info?.itemAttribute?.vegClassifier == "VEG" ? (
                    <img
                      src="https://cdn.shopify.com/s/files/1/0050/5508/6656/products/2000px-Indian-vegetarian-mark.svg_aa6ffbb3-9caf-482d-a679-147a3af521b0.png?v=1663136192&width=1946"
                      className="h-[20px] w-[20px]"
                    />
                  ) : (
                    <img
                      src="https://w7.pngwing.com/pngs/344/498/png-transparent-computer-icons-computer-software-light-non-veg-food-angle-rectangle-orange-thumbnail.png"
                      className="h-[25px] w-[25px]"
                    />
                  )}
                  <p className="w-[100px] h-[50px] text-center ">
                    {menu?.card?.info?.itemAttribute?.vegClassifier}
                  </p>
                  <p className="w-[100px] h-[50px]  overflow-hidden text-center">
                    {menu?.card?.info?.name}
                  </p>
                  <img
                    src={IMGID + menu?.card?.info?.imageId}
                    className="h-[50px] w-[100px] rounded-xl"
                  />
                  <p className="w-[100px] h-[50px] text-center">
                    ₹
                    {!menu?.card?.info?.price
                      ? 0
                      : menu?.card?.info?.price / 200}
                  </p>
                  <button
                    onClick={() => addCart(menu)}
                    className="w-[100px] h-[40px] text-center bg-yellow-300 hover:bg-yellow-400 rounded-2xl"
                  >
                    Add to cart
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default ResDet;
