import './ProductContainer.css'
import { Link } from 'react-router-dom';

export default function ProductContainer({description, price, buttontxt}) {
    return(
        <div className="service-container-parent">
            <div className="service-image">
                image
            </div>
            <div className="service-desc-parent">
               <div className="service-description">
                <h2>{description}</h2>

                <div className="service-price">
                    <p>{price}</p>
                </div>
                
                </div>
                <div className="service-btn">
                    <button><Link to="/services/about-service">{buttontxt}</Link></button>
                </div> 
            </div>
            
        </div>
    );
}