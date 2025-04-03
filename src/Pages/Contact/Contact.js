import './Contact.css'

export default function Contact(){
    return(
        <div className='support-master'>
            <h1>Help & Support</h1>
            <div className="support-input-container">
                <input 
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                />

                <div className="support-email">
                    <input 
                        placeholder="Email"
                        type="text"
                        id="name"
                        name="name"
                    /> 
                </div>
                

            <div className='enquiry-dropdown'>
                <select id="enquiry-type">
                    
                    <option value="lorem">Enquiry Type:</option>
                    <option value="lorem">Enquiry type 1</option>
                    <option value="lorem">Enquiry type 2</option>
                    <option value="lorem">Enquiry type 3</option>
                    <option value="lorem">Enquiry type 4</option>
                </select>
            </div>

                <input 
                    className="enquiry-field"
                    placeholder="Enquiry"
                    type="text"
                    id="enquiry"
                    name="enquiry"
                />

            </div>
            
            <div className='support-submit-btn-parent'>
                <div className="support-submit-btn">
                    <button>Submit</button>  
                </div>    
            </div>
            

        </div>
        
    );
}