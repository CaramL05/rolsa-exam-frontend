import './Services.css'
import ChargingStation from "../../Images/Charging Station.jpg"
import ProductContainer from '../../Components/ProductContainer/ProductContainer';


export default function Services(){
    return(
        <div className="service-master-parent">
            <ProductContainer description="service 1" buttontxt="Get Quote" price="£600"/>
            <ProductContainer description="service 2" buttontxt="Get Quote" price="£999"/>
            <ProductContainer description="service 3" buttontxt="Get Quote" price="£200"/>

            <ProductContainer description="service 4" buttontxt="Get Quote" price="£600"/>
            <ProductContainer description="service 5" buttontxt="Get Quote" price="£999"/>
            <ProductContainer description="service 6" buttontxt="Get Quote" price="£200"/>
        </div>
    );
}