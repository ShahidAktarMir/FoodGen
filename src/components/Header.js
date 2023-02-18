import Logo from "../assets/images/pizza.svg"
const Header = ()=>{
    return(
        <div className="header">
            <div className="Logo">
            <img src={Logo} alt="Logo"/>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Order</li>
                    <li>Profile</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;