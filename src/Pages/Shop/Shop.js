import './Shop.css'
import ProductContainer from '../../Components/ProductContainer/ProductContainer';

export default function Shop(){
    return(
        <div className='shop-container-master'>
        <h1>Shop</h1>
        <div className='shop-container'>
            <ProductContainer  description="product 1" buttontxt="Add to cart" price="£59.99"/>

        </div>
        </div>
    );
}