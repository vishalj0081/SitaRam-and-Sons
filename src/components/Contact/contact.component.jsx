
import './contact.styles.scss';

const Contact = () => {

    return(
     <div className='contact-container'>
      <h1 className="heading">
     Contact Us: 
     </h1>
    <h2 className='Enquiry'> Make an enquiry </h2>
    <h3 className='Address-body'> Just to serve you better provide us the complaints by reaching us out on the below contact details.  </h3>

 
          


    <div className='Contact-information'> 
    <h4 className='gap'> CALL US:  </h4>
     <p className="Under-callUs"> Pick up the phone and call us on <a href="tel: +91-9554614360" className='Under-callUs'>  +91-9554614360 </a> . We're available Mon to Sat 10:00 Am to 6:00 Pm IST </p>
     <p className='gap'>
    Regd.Office:
    </p>
       <span className='Address-body'>
      <p> SITA RAM AND SON'S  </p>
     <p> Bus Stand, Dudhi, Sonbhadra, </p> 
     <p> Uttar Pradesh, 231208 </p>
     </span>
     <div className='gap'> 
     <p className='Address-Head'> GSTIN: <span className='Address-body'> 09AKAPK0203D2ZY </span></p>
     <p className='Address-Head'> Phone No: <a href="tel: +91-9554614360" className='Mail'>  +91-9554614360 </a> </p>
    <p className='Address-Head'> Email: <a className='Mail' href="mailto: Dilipjaiswal019@gmail.com" > Dilipjaiswal019@gmail.com </a> </p> 
    </div>
    </div>
      
  
    </div>
    );
};

export default Contact;