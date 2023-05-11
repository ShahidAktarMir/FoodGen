import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
  const isOnline = useOnline();
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
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 hover:text-slate-500">
            <Link to="/">Products</Link>
          </li>
          <li className="px-2 hover:text-slate-500">
            <Link to="/">Order</Link>
          </li>
          <li className="px-2 hover:text-slate-500">
            <Link to="/about">Profile</Link>
          </li>
          <li className="px-2 hover:text-slate-500">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="py-8 w-24">
        {!isOnline ? (
          <div className="bg-red-100 rounded-xl text-center ">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <p>Online</p>
          </div>
        ) : (
          <p className="bg-red-100 rounded-xl p-2">🔴 Offline</p>
        )}
      </div>
    </div>
  );
};
export default Header;
