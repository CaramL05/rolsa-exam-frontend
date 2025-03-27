import './PostcodeInput.css'
import { Link } from 'react-router-dom';

export default function PostcodeInput() {
    return(
        <div className="services-container-parent">

                <div className="services-postcode-container">

                    <form className="services-postcode-field">
                        <label for="postcode"></label>
                        <input type="text" id="postcode" name="postcode" placeholder="Enter Postcode" required/>
                        
                        <button className='services-quote-btn'><Link to="service-questionnaire">Get Quote</Link></button>
                    </form>
                    
                </div>
        </div>
    );
}