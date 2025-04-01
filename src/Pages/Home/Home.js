import './Home.css'
import ChargingStation from "../../Images/Charging Station.jpg"
import FooterSection from '../../Components/FooterSection/FooterSection';

export default function Home(){
    return(
        <>
            <div className="container-parent">
                <div className="postcode-container">
                    <form className="postcode-field">
                        <label for="postcode"></label>
                        <input type="text" id="postcode" name="postcode" placeholder="Enter Postcode" />
                        
                        <button className='get-quote-btn'>GET QUOTE</button>
                    </form>
                </div>
            </div>
            
            <section className='about-company'>
                <h1 id='title'>WHO ARE ROLSA TECHNOLOGIES?</h1>
                <p id='temp-info'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>

            <section className='section-parent'>
                <div className='image-container'>
                    <img src={ChargingStation}></img>
                </div>
                <div className='what-we-provide'>
                    <h2>WHAT WE PROVIDE</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
            </section>    
                
            <section className='section-parent'>

                <div className='what-we-provide'>
                    <h2>SMART HOME ENERGY MANAGEMENT</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className='image-container'>
                    <img src={ChargingStation}></img>
                </div>
            </section>

            <section className='section-parent'>
                <div className='image-container'>
                    <img src={ChargingStation}></img>
                </div>
                <div className='what-we-provide'>
                    <h2>WHAT WE PROVIDE</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
            </section>

        <FooterSection />
       </> 
    );
}