import './Result.css'
import GreenFoot from "../../Images/GreenFoot.png"
import { Link } from 'react-router-dom';

export default function Result(){
    return(
        <div className='result-master'>
            <h1>Your carbon footprint is:</h1>
            
            <div className='result-container'>
                <div className='foot-image-container'>
                    <img src={GreenFoot}></img>
                </div>

                <div className='result'>
                    <h2>4 Tonnes</h2>
                </div>    
            </div>

            <div className='key-container-parent'>
                <div className='result-information'>
                    <p>Over 5 : your carbon footprint is high. Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes penatibus molestie volutpat inceptos aenean viverra consequat. </p>
                    <p>Between 2 and 5 : your carbon footprint relatively low. Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes penatibus molestie volutpat inceptos aenean viverra consequat. </p>
                    <p>Under 2 : your carbon footprint low. Lorem ipsum odor amet, consectetuer adipiscing elit. Leo montes penatibus molestie volutpat inceptos aenean viverra consequat. </p>
                </div>
            </div>

            <div className='save-score-btn'>
                <div className='service-btn'>
                    <button><Link to="/login">Save Score</Link></button>
                </div>    
            </div>
            
            

        </div>
    );
}