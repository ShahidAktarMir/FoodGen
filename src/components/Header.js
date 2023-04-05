import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
            <div className="header">
                   <div className="navMenu1">
                        <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to = "/about">About</Link></li>
                                <li><Link to="/">Products</Link></li>
                             </ul>
                    </div>
                    
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    
                    <div className="navMenu2">
                            <ul>
                                <li><Link to="/">Order</Link></li>
                                <li><Link to = "/about">Profile</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
            </div>
    )
}

export default Header;