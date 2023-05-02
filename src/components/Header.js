import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50">
      <div className="h-24 w-28">
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
      <div className="py-8">
        {!isOnline ? <p>[Online]</p> : <p>[Offline]</p>}
      </div>
    </div>
  );
};
export default Header;
