import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50 pl-10 pr-10">
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
              Cart
              <span className="bg-green-600 text-gray-100 p-3 ml-2 rounded-md">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li className="px-2 hover:text-slate-500">
            <Link to="/">Order</Link>
          </li>
          <li className="px-2 hover:text-slate-500">
            <Link to="/about">Profile</Link>
          </li>
          <li className="px-2 hover:text-slate-500">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 hover:text-slate-500">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
