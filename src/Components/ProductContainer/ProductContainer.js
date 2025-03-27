import './ProductContainer.css'

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
                    <button>{buttontxt}</button>
                </div> 
            </div>
            
        </div>
    );
}