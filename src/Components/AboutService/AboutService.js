import './AboutService.css'
import PostcodeInput from '../PostcodeInput/PostcodeInput';

export default function AboutService({image, description}){
    return(
        <div className="extra-content-parent">
            <div className="large-image-container">
                <h1>image{image}</h1>
            </div>
            <div className="extra-information">
                <h2>*description*{description}</h2>
            </div>
            <div className="postcode-input-parent">
                <PostcodeInput />
            </div>
            
        </div>
    );
}