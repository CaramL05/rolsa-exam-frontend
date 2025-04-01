import './Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='form-master'>
            <h1>Login</h1>
            <div className="form-parent">
                
                <div className="form">
                    <form>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email" />

                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password" />

                        <input type="submit" value="Submit"></input>
                        <button type="submit" value="Register"><Link to="#">Register</Link></button>
                    </form>
                </div>
            </div>
        </div>
    );
}