import './LargeProductImage.css'

export default function LargeProductImage({description}) {
    return(
        <div className='payment-content-page'>
            <div className='large-product-image-parent'>
                <div className='product-image'>
                    Image
                </div>
                <div className='product-description'>
                    <h1>*description*{description}</h1>
                </div>
            </div>
            <div className="payment-details-parent">
                <div className='payment-text'>
                    <p>Payment</p>
                    <p>Due Today</p>
                    <p>£999</p>
                </div>
                <div className='payment-buttons'>
                    
                </div>


            </div>
       </div> 
    );

}