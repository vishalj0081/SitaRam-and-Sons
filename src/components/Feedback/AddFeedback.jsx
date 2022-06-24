import { useState } from 'react';
import  FeedbackServices from '../../utils/firebase/firebase.utils';
import './addfeeback.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  Name: '',
  email: '',
  message: '',
};

const AddFeedback = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {Name, email,message } = formFields;
 
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
  
     
    const newFeedback = {
      Name,
      email,
      message,
    };
    
  
     try {
      if (Name === '' || email === '' || message ==='') {
        alert('All Fields are Mandatory');
      } else {
        await FeedbackServices.addFeedback(newFeedback);
        alert('Your Feedback is Submitted');
      }
    }    

    catch (err) {
    alert('unexpected error occured Try Again');
    }

    resetFormFields(); 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
         
    setFormFields({ ...formFields, [name]: value });
    };



  return (

    <form className="form" onSubmit={handleSubmit}>
     
      <label>Name</label>
      <input
      type='text'
      required
      placeholder="Name"
      onChange={handleChange} 
      name ='Name'
      value={Name}
      />

      <label>Email</label>
      <input
      type='email'
        placeholder="Email"
        onChange={handleChange}
        name ='email'
        value={email}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        onChange={handleChange}
        name ='message'
        value={message}
      ></textarea>
      
      <Button
        type="submit" >
        Submit
      </Button>
    </form>
  );
};  
   

export default AddFeedback;