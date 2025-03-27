import './PostcodeInput.css'

export default function PostcodeInput() {
    return(
        <div className="services-container-parent">

                <div className="services-postcode-container">

                    <form className="services-postcode-field">
                        <label for="postcode"></label>
                        <input type="text" id="postcode" name="postcode" placeholder="Enter Postcode" />
                        
                        <button className='services-quote-btn'>GET QUOTE</button>
                    </form>
                    
                </div>
        </div>
    );
}