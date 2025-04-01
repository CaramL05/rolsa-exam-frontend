import './SignUp.css'

export default function SignUp(){
    return(
        <div className='sign-up-master'>
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
        </div>
    );
}