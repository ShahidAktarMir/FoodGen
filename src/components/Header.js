import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.item);
  return (
    <>
      <div className="flex justify-between backdrop-blur-sm text-gray-900 text-sm pl-10 pr-10 ... sticky top-0 bg-white/80 ... font-semibold shadow-sm">
        <div className="h-24 w-28 p-2 mt-1">
          <img src={logo} />
        </div>
        <div>
          <ul className="flex py-8 px-10">
            <li className="px-2 hover:text-slate-500">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 hover:text-slate-500">
              <Link to="/cart">
                <div className="flex flex-wrap">
                  <p>Cart</p>
                  <p className="bg-green-700 text-gray-100 h-[30] w-[30] ml-2 rounded pt-[2] text-center">
                    {cartItems.length}
                  </p>
                </div>
              </Link>
            </li>
            <li className="px-2 hover:text-slate-500">
              <Link to="/">Order</Link>
            </li>
            <li className="px-2 hover:text-slate-500">
              <Link to="/about">Profile</Link>
            </li>
            <li className="px-2 hover:text-slate-500">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-2 hover:text-slate-500">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
