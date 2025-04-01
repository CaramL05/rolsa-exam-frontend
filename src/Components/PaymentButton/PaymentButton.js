import './PaymentButton.css'

export default function PaymentButton({text}) {
    return(
        <div className='payment-btn'>
            <button>{text}</button>
        </div>
    );
}