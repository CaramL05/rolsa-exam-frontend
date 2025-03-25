import './Home.css'

export default function Home(){
    return(
        <div className="container-parent">
            <div className="postcode-container">
                <form className="postcode-field">
                    <label for="postcode"></label>
                    <input type="text" id="text" name="text" placeholder="Enter Postcode" />
                </form>
            </div>
        </div>
    );
}