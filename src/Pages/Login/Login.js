import './Login.css'

export default function Login(){
    return(
        <div className="form-parent">
            <div className="form">
                <form>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" />

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}