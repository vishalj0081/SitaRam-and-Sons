
import { useState} from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { StyledSignInContainer, SignInButtoncontainer } from './sign-in-form.styles';


const defaultFormFields = {
  email: '',
  password: '',        
  };

const SignInForm = () => {
const [formFields, setFormFields] = useState(defaultFormFields);
const { email, password } = formFields;
                   
const resetFormFields = () => {
setFormFields(defaultFormFields);
};
      
const SignInWithGoogle = async () => {
await signInWithGooglePopup();
};

const handleSubmit = async (event) => {
event.preventDefault();
                          
try {
await  signInAuthUserWithEmailAndPassword (email, password);
resetFormFields();
} catch (error) 
{
switch(error.code){
case  'auth/wrong-password':
alert('Wrong Password');
break
case 'auth/user-not-found':
alert('No User Found')
break
default:
console.log(error);   
}                                     
} };

const handleChange = (event) => {
const { name, value } = event.target;

setFormFields({ ...formFields, [name]: value });
};


return (      
<StyledSignInContainer> 
<h2> Already have an account ? </h2>
<span> Sign In with Email and Password </span>
<form onSubmit={handleSubmit}>
          
    <FormInput
    label='Email'
    type='email'
    required
    onChange={handleChange}
    name='email'
    value={email}
    />
    
    <FormInput 
    label='Password'
    type='password'
    required
    onChange={handleChange}
    name='password'
    value={password} 
    />
<SignInButtoncontainer>

<Button  type="submit">  Sign In   </Button>
<Button type="button" buttonType={ BUTTON_TYPE_CLASSES.google } onClick={ SignInWithGoogle }> Google Sign in </Button>

</SignInButtoncontainer>
</form>



    </StyledSignInContainer>
        );
};

export default SignInForm;