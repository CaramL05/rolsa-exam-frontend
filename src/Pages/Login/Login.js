import './Login.css'

export default function Login(){
    return(
        <div className="form">
            <form>
                <div className="container">
                    <label for="email">Email:</label>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="email" 
                        required 
                    />
                    <label for="password">Password:</label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        required 
                    />
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}