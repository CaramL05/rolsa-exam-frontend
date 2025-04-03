import './SignUp.css'

export default function SignUp(){
    return(
        <div className='sign-up-master'>
            <h1>Sign Up</h1>
            <div className="form-parent">
                <div className="form">
                    <form>

                        <label for="fname">Full name:</label>
                        <input type="text" id="fname" name="fname" placeholder="First name" />

                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Username" />

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