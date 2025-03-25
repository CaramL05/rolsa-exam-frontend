import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/carbon-footprint">Carbon Footprint</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/sign-up">Sign Up</Link></li>
                </ul>
            </nav>
        </div>
    );
}