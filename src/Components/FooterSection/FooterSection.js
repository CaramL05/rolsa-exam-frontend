import './FooterSection.css'
import { Link } from 'react-router-dom';

export default function FooterSection(){
    return(
        <footer>
            <h2>ROLSA TECHNOLOGIES</h2>

            <ul>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
                <li><Link to="/">Lorem</Link></li>
            </ul>
        </footer>
    );
}