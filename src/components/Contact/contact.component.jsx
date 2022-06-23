
import './contact.styles.scss';

import Button from '../button/button.component';

const Contact = () => {

    return(
     <div className='contact-container'>
      <h1 className="heading">
     Contact Us: 
     </h1>
    <h2 className='Enquiry'> Make an enquiry </h2>
    <p className='Address-body'> Just to serve you better please provide us following details </p>

  <div className='Enquiry-table'>
 <label className='Label'> Your Name </label>
 <input type= "text" required></input>
 <label className='Label'> Mobile Number </label>
 <input type= "text" required></input>
 <label className='Label'> Your Email </label>
 <input type= "email" required ></input>
 <label className='Label'> Subject </label>
 <input type= "text" required></input>
 <label className='Label'> Message </label>
 <input type= "text" required></input>

   <div className='Button'> 
 <Button> Send </Button>
</div>
          
</div>

    <div className='Contact-information'> 
    <p className='Address-Head'> CALL US:  </p>
     <p className="Under-callUs"> Pick up the phone and call us on 9451631818 . We're available Mon to Sat 10:00 Am to 6:00 Pm IST </p>
     <p className='Address-Head'>
    Regd.Office:
    </p>
       <span className='Address-body'>
      <p> SITA RAM AND SON'S  </p>
     <p> Bus Stand, Dudhi, Sonbhadra, </p> 
     <p> Uttar Pradesh, 231208 </p>
     </span>
     <p className='Address-Head'> GSTIN: <span className='Address-body'> 09AKAPK0203D2ZY </span></p>
     <p className='Address-Head'> Phone No: <span className='Address-body'>  +91-9451631818 </span> </p>
    <p className="Address-Head"> Email: <a className='Mail' href="mailto: Dilipjaiswal019@gmail.com" > Dilipjaiswal019@gmail.com </a> </p> 
    </div>
      
  
    </div>
    );
};

export default Contact;