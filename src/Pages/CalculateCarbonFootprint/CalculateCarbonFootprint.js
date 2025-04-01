import './CalculateCarbonFootprint.css'
import { Link } from 'react-router-dom';

export default function CalculateCarbonFootprint() {
    return (
        <div className='carbon-calculator-master'>
            <h1>Carbon Footprint Questionnaire</h1>

            <h2>Which mode of transport do you use most often?</h2>
            <label for="lorem">Choose option:</label>
            <select id="lorem">
                <option value="lorem">Bus</option>
                <option value="lorem">Car</option>
                <option value="lorem">Train</option>
                <option value="lorem">Other</option>
            </select>

            <h2>Question 2</h2>
            <label for="lorem">Choose option:</label>
            <select id="lorem">
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
            </select>

            <h2>Question 3</h2>
            <label for="lorem">Choose option:</label>
            <select id="lorem">
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
            </select>

            <h2>Question 4</h2>
            <label for="lorem">Choose option:</label>
            <select id="lorem">
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
            </select>

            <h2>Question 5</h2>
            <label for="lorem">Choose option:</label>
            <select id="lorem">
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
            </select>

            <div className='service-btn'>
                <button><Link to="/result">Submit</Link></button>
            </div>
        </div>
    );
}