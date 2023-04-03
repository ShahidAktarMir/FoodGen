import logo from "../assets/images/logo.png"
const Header = ()=>{
    return(
            <div className="header">
                   <div className="navMenu1">
                        <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Products</li>
                             </ul>
                    </div>
                    
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    
                    <div className="navMenu2">
                            <ul>
                            <li>Order</li>
                            <li>Profile</li>
                            <li>Contact Us</li>
                            </ul>
                        </div>
            </div>
    )
}

export default Header;