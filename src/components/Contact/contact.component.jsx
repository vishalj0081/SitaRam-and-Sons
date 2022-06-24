
import AddFeedback from '../Feedback/AddFeedback';

import './contact.styles.scss';

const Contact = () => {

    
    return(
     <div >
     <h1>Contact Us 🤳</h1>
      
      <div className='h-container'> 
     <span > Make an enquiry </span>
     <span> Contact Information</span>
     </div>
    
          <div className='contact-container'> 

        <AddFeedback/> 
     
       
     <div className='Address-body'>
     
     <p className='Address-head'>  Registered Office:   </p> <br></br>
       SITA RAM AND SON'S, <br></br>
      Bus Stand, Dudhi, Sonbhadra, <br></br>
      Uttar Pradesh, 231208 <br></br>
       GSTIN: 09AKAPK0203D2ZY <br></br>
      Phone No: <a href="tel: +91-9554614360" className='Mail'>  +91-9554614360 </a> <br></br>
      Email: <a className='Mail' href="mailto: Dilipjaiswal019@gmail.com" > Dilipjaiswal019@gmail.com </a>
      
      </div>
    
    
     </div>
     </div>
    
      
  
   
    );
};

export default Contact;