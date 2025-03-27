import './Services.css'
import ChargingStation from "../../Images/Charging Station.jpg"
import ProductContainer from '../../Components/ProductContainer/ProductContainer';
import FooterSection from '../../Components/FooterSection/FooterSection';


export default function Services(){
    return(
        <div className="services-page">
            <h1>Services</h1>
            <div className="service-master-parent">
                <ProductContainer description="Solar Panel Installation & Maintenance" buttontxt="Get Quote" price="£600"/>
                <ProductContainer description="Electric Vehicle Charging Stations" buttontxt="Get Quote" price="£999"/>
                <ProductContainer description="Smart Home Energy Management Systems" buttontxt="Get Quote" price="£200"/>

                <ProductContainer description="service 4" buttontxt="Get Quote" price="£600"/>
                <ProductContainer description="service 5" buttontxt="Get Quote" price="£999"/>
                <ProductContainer description="service 6" buttontxt="Get Quote" price="£200"/>
            </div>
            <FooterSection />
        </div>
    );
}