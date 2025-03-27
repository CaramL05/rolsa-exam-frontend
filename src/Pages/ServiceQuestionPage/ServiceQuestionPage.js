import './ServiceQuestionPage.css'
import { Link } from 'react-router-dom';

export default function ServiceQuestionsPage() {
    return (
        <div className='questionnaire'>
            <h1>Question..1</h1>

            <label for="lorem">Choose option: </label>
            <select id="lorem">
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
            </select>

            <h1>Question..2</h1>
            <form>
                <input type="radio" id="lorem" name="lorem" value="lorem" />
                <label for="lorem">Option 1</label><br></br>
                <input type="radio" id="lorem" name="lorem" value="lorem" />
                <label for="lorem">Option 2</label><br></br>
                <input type="radio" id="lorem" name="lorem" value="lorem" />
                <label for="lorem">Option 3</label><br></br>
                <input type="radio" id="lorem" name="lorem" value="lorem" />
                <label for="lorem">Option 4</label><br></br>

            </form>

            <h1>Question..3</h1>

            <label for="lorem">Choose option: </label>
            <select id="lorem">
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
                <option value="lorem">Lorem</option>
            </select>

            <h1>Question..4</h1>
            <form>
                <input type="radio" id="lorem" name="lorem" value="lorem" />
                <label for="lorem">Option 1</label><br></br>
                <input type="radio" id="lorem" name="lorem" value="lorem" />
                <label for="lorem">Option 2</label><br></br>
                <input type="radio" id="lorem" name="lorem" value="lorem" />
                <label for="lorem">Option 3</label><br></br>
                <input type="radio" id="lorem" name="lorem" value="lorem" />
                <label for="lorem">Option 4</label><br></br>

            </form>
            <div className='service-btn'>
                <button><Link to="/services/about-service/service-questionnaire/calendar">Next</Link></button>
            </div>
            


        </div>
    );
}