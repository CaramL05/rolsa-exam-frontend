import './Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'; 

export default function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8001/auth/login', formData);
          console.log('User added successfully:', response.data);
          // Handle success (e.g., show a success message, redirect, etc.)
        } catch (error) {
          console.error('Error adding user:', error);
          // Handle error (e.g., show an error message)
        }
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    return (
        <div className='form-master'>
            <h1>Login</h1>
            <div className="form-parent">
                
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />

                        <input type="submit" value="Submit"></input>
                        <button type="submit" value="Register"><Link to="/sign-up">Sign Up</Link></button>
                    </form>
                </div>
            </div>
        </div>
    );
}