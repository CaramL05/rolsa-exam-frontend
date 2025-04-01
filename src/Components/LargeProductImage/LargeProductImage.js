import './LargeProductImage.css'
import PaymentButton from '../PaymentButton/PaymentButton';

export default function LargeProductImage({description}) {
    return(
        <>
            <div className='payment-content-page'>
                <div className='large-product-image-parent'>
                    <div className='product-image'>
                        Image
                    </div>
                    <div className='product-description'>
                        <h1>*description*{description}</h1>
                    </div>
                </div>
                <div className="payment-details-parent">
                    <div className='payment-text'>
                        <p>Payment</p>
                        <p>Due Today</p>
                        <p>£999</p>
                    </div>
                    <div className='payment-buttons'>
                        <div className='buttons1'>
                            <PaymentButton text="Pay Now" />
                            <PaymentButton text="Apple Pay"/>   
                        </div>
                        <div className='buttons2'>
                            <PaymentButton id="button3" text="Google Pay"/>
                            <PaymentButton text="Shop"/>   
                        </div>
                        
                    </div>


                </div>
        </div> 

        <p>Lorem ipsum dolor sit amet. Ut ipsam eveniet et voluptatum quasi quo esse voluptatem eum repudiandae possimus a architecto beatae sed necessitatibus ipsa est dolorem quos. Vel porro natus cum impedit voluptatem non quae dolores sit quaerat suscipit ea sapiente animi rem recusandae iusto. At reprehenderit nihil non quia obcaecati vel nemo alias ab dolorem velit et esse eaque rem nobis deserunt ad deleniti ipsa. Qui consequatur ullam id adipisci obcaecati est quisquam provident qui omnis iure sit aperiam officia 33 voluptas nisi 33 internos culpa?

            Qui recusandae quas et quam aperiam id commodi galisum qui consequatur odio qui unde asperiores qui culpa iusto. Cum corrupti labore id asperiores laudantium quo cupiditate repellendus ut quam vitae qui distinctio accusamus. Id reiciendis quam et aliquam impedit aut consequatur molestias eum veritatis minima est magni tempora sit explicabo ipsum eum esse voluptas. Cum quam internos quo suscipit saepe ut voluptatem quaerat ea veritatis sunt.

            Id tempore dolorum rem voluptate molestiae quo quod ullam ut galisum accusamus aut suscipit rerum id sunt debitis. Id veniam voluptatem ut rerum laudantium hic reiciendis minima et explicabo doloremque aut voluptatem quod non aspernatur galisum sit voluptas adipisci. Qui voluptatum repudiandae a nihil ipsum eum maiores iure.</p>
       </>
       
    );

}