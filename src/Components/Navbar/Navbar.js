import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="navbar-parent">
            <nav>
                <ul>
                    <li id="rolsa-logo"><Link to="/">Rolsa Technologies</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/carbon-footprint">Carbon Footprint</Link></li>
                    <li><Link to="/contact">Help & Support</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    );
}