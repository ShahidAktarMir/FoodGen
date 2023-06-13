import { useDispatch, useSelector } from "react-redux";
import { IMGID } from "./constant";
import { clearCart, removeItem } from "../utils/Cart";
const CartDetails = () => {
  const cartItem = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };
  const deleteItem = (item) => {
    const id = item.card?.info?.id;
    dispatch(removeItem(id));
  };
  const Total = () => {
    let sum = 0;
    cartItem.map((item) => {
      sum = sum + item.card?.info?.price / 200;
    });
    return sum;
  };

  return (
    <>
      <div className="m-10 rounded-md p-5 bg-gray-100">
        <div className="flex flex-wrap justify-between">
          <h1>{cartItem.length}-Items</h1>
          <button
            className="bg-red-500 text-gray-100 rounded-full hover:bg-red-400 p-2 w-20"
            onClick={() => clear()}
          >
            Clear
          </button>
        </div>

        {cartItem.map((item) => {
          return (
            <div
              className="border-2 m-5 p-5 h-30 flex flex-wrap justify-between bg-gray-50"
              key={item.card?.info?.id}
            >
              <div className=" w-1/3 flex flex-wrap ">
                <img
                  src={IMGID + item?.card?.info?.imageId}
                  className="h-[60]"
                />
                <div className="ml-10">
                  <h1 className="font-semibold">{item?.card?.info?.name}</h1>

                  {item.card?.info?.itemAttribute?.vegClassifier == "VEG" ? (
                    <div className="flex flex-wrap mt-2">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0050/5508/6656/products/2000px-Indian-vegetarian-mark.svg_aa6ffbb3-9caf-482d-a679-147a3af521b0.png?v=1663136192&width=1946"
                        className="h-5"
                      />
                      <h3 className="ml-2">
                        {item.card?.info?.itemAttribute?.vegClassifier}
                      </h3>
                    </div>
                  ) : (
                    <div className="flex flex-wrap mt-2">
                      <img
                        src="https://w7.pngwing.com/pngs/344/498/png-transparent-computer-icons-computer-software-light-non-veg-food-angle-rectangle-orange-thumbnail.png"
                        className="h-7"
                      />
                      <h3 className="ml-2">
                        {item.card?.info?.itemAttribute?.vegClassifier}
                      </h3>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap">
                <h1 className="mt-5">₹{item.card?.info?.price / 200}</h1>
                <button className="p-2 w-20" onClick={() => deleteItem(item)}>
                  <img
                    src="https://img.icons8.com/?size=512&id=102350&format=png"
                    className="h-12"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="m-20 text-end">
        <h1 className="rounded-md p-5 bg-rose-300">Total - ₹{Total()}</h1>
        <button className="text-green-500 cursor-pointer hover:bg-green-500 transition-all duration-500 ease-in-out hover:text-gray-100 mt-10 bg-gray-200 rounded-full p-5 text-center font-semibold w-full">
          Chekout
        </button>
      </div>
    </>
  );
};
export default CartDetails;
