import './SignUp.css'
import axios from 'axios';
import { useState } from 'react';

export default function SignUp(){

    const [formData, setFormData] = useState({ fname: '', username:'', email: '', password: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await axios.post('http://localhost:8001/api/users', formData); // Chnage link if needed inside ''
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

    return(
        <div className='sign-up-master'>
            <h1>Sign Up</h1>
            <div className="form-parent">
                <div className="form">
                    <form onSubmit={handleSubmit}>

                        <label for="fname">Full name:</label>
                        <input type="text" id="fname" name="fname" placeholder="Full name"  value={formData.fname} onChange={handleChange}/>

                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>

                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>

                        <input type="submit" value="Submit"></input>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}