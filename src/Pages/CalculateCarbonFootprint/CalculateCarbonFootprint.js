import './CalculateCarbonFootprint.css'

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

            
        </div>
    );
}