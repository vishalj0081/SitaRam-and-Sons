
import AddFeedback from '../Feedback/AddFeedback';

import './contact.styles.scss';

const Contact = () => {

    
 return(
<div> 
<h1>Contact Us 🤳</h1>

<div className='Address-body'>
<span> <strong>  Registered Office:   </strong> 
SITA RAM AND SON'S, Bus Stand, Dudhi, Sonbhadra,Uttar Pradesh, 231208<br></br>

<p> 
<strong> GSTIN : </strong> 09AKAPK0203D2ZY   
        
  <strong> Phone No:    </strong> <a href="tel: +91-9554614360" className='Mail'>  +91-9554614360 </a> 
  <strong>  Email:</strong> <a className='Mail' href="mailto: Dilipjaiswal019@gmail.com" > Dilipjaiswal019@gmail.com </a>
  </p>
  </span>    
</div>

<div className='Heading'>
<p > Make an enquiry </p>
</div>

    
<div className='contact-container'> 

<AddFeedback /> 



     </div>
     </div>
    
      
  
   
    );
};

export default Contact;