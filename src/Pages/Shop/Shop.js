import './Shop.css'
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import LargeProductImage from "../../Components/LargeProductImage/LargeProductImage"
import FooterSection from '../../Components/FooterSection/FooterSection';

export default function Shop(){
    return(
        <div className='shop-container-master'>
            <h1>Shop</h1>
            <div className='shop-container'>
                <ProductContainer  description="product 1" buttontxt="Add to cart" price="£59.99"/>
                <ProductContainer  description="product 2" buttontxt="Add to cart" price="£59.99"/>
                <ProductContainer  description="product 3" buttontxt="Add to cart" price="£59.99"/>
                
                <ProductContainer  description="product 4" buttontxt="Add to cart" price="£59.99"/>
                <ProductContainer  description="product 5" buttontxt="Add to cart" price="£59.99"/>
                <ProductContainer  description="product 6" buttontxt="Add to cart" price="£59.99"/>

            </div>
            
            <FooterSection />
        </div>
    );
}