import { useDispatch, useSelector } from "react-redux";
import { IMGID } from "./constant";
import { clearCart } from "../utils/Cart";
const CartDetails = () => {
  const cartItem = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-10 flex flex-wrap">
      <button
        className="bg-red-500 text-gray-100  p-2 w-20"
        onClick={() => clear()}
      >
        Clear
      </button>
      {cartItem.map((item) => {
        console.log(item);
        return (
          <div className="bg-gray-100 p-5 border-2 border-x-red-500 border-y-green-100 hover:border-y-green-500 hover:border-x-red-100 rounded-2xl h-3/4 w-96 transition-all duration-500 ease-in-out m-5">
            <img
              src={IMGID + item?.card?.info?.imageId}
              className="rounded-t-lg mb-10"
            />
            <h1 className="font-semibold">{item?.card?.info?.name}</h1>
            <h3 className="">{item.card?.info?.description}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default CartDetails;
