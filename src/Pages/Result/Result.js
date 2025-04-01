import './Result.css'
import GreenFoot from "../../Images/GreenFoot.png"

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

            
            

        </div>
    );
}