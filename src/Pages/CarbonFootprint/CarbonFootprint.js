import './CarbonFootprint.css'
import ChargingStation from "../../Images/Charging Station.jpg"
import FooterSection from '../../Components/FooterSection/FooterSection';
import { Link } from 'react-router-dom';

export default function CarbonFootprint(){
    return(
        <div className="carbon-fprint-master">
            <h1>What is a Carbon Footprint?</h1>
            <div className="carbon-fprint-section">

               <div className="placeholder-text">
                    Lorem ipsum dolor sit amet. Ab consequatur fugit 33 sapiente dignissimos sed perferendis mollitia et vitae quibusdam! Ut vero aspernatur id odit voluptas est amet tempore cum quidem nesciunt et quaerat incidunt non quod accusamus! Ex sequi facere ut molestiae rerum et pariatur voluptatum et ducimus quae qui nobis galisum sit nemo quod! Eum tenetur labore ut Quis commodi aut galisum molestias et quae nisi nam Quis fugit ex obcaecati illo!
                    Aut eligendi culpa rem optio eaque id animi quisquam ut Quis aliquid nam nemo sint ex exercitationem optio et quia voluptas. Et rerum sunt ut odio adipisci ea perferendis provident est fugiat accusamus et consectetur saepe ut amet explicabo. Ad labore quam cum quae tempora aut eligendi explicabo.
                    Ut dolore nostrum sit atque soluta ea pariatur earum ut delectus dolorum aut voluptatum libero. Qui debitis quos vel reiciendis blanditiis qui porro totam sed earum consequatur et neque fugit in aperiam maiores et atque sequi. Et natus quisquam sit voluptatum iusto qui doloremque perspiciatis. Sit velit voluptatem vel galisum possimus et voluptatem dicta qui dolorum suscipit aut totam perferendis.
                </div> 
                <div className="carbon-fprint-image">
                    Image
                </div>
            </div>
            
            <br />
            <br />

            <h1>How can we reduce it?</h1>

            <div className="carbon-fprint-section">

                <div className="carbon-fprint-image">
                    Image
                </div>
                
               <div className="placeholder-text">
                    Lorem ipsum dolor sit amet. Ab consequatur fugit 33 sapiente dignissimos sed perferendis mollitia et vitae quibusdam! Ut vero aspernatur id odit voluptas est amet tempore cum quidem nesciunt et quaerat incidunt non quod accusamus! Ex sequi facere ut molestiae rerum et pariatur voluptatum et ducimus quae qui nobis galisum sit nemo quod! Eum tenetur labore ut Quis commodi aut galisum molestias et quae nisi nam Quis fugit ex obcaecati illo!
                    Aut eligendi culpa rem optio eaque id animi quisquam ut Quis aliquid nam nemo sint ex exercitationem optio et quia voluptas. Et rerum sunt ut odio adipisci ea perferendis provident est fugiat accusamus et consectetur saepe ut amet explicabo. Ad labore quam cum quae tempora aut eligendi explicabo.
                    Ut dolore nostrum sit atque soluta ea pariatur earum ut delectus dolorum aut voluptatum libero. Qui debitis quos vel reiciendis blanditiis qui porro totam sed earum consequatur et neque fugit in aperiam maiores et atque sequi. Et natus quisquam sit voluptatum iusto qui doloremque perspiciatis. Sit velit voluptatem vel galisum possimus et voluptatem dicta qui dolorum suscipit aut totam perferendis.
                </div> 
            </div>
            
            <br />
            <br />

            <h1>Whats your carbon footprint?</h1>
            <h2>Figure out your carbon footprint below...</h2>

            <br />
            <br />
            
            <div className="carbon-frpint-calc-btn-container">
                    
                    <button className="carbon-frpint-calc-btn"><Link to="/calculate-footprint">Click here!</Link></button>
            </div>
            
            <FooterSection />
        </div>
    );
}