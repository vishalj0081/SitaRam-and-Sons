
import SignUpForm from '../../Sign-up-form/sign-up-form.component';
import SignInForm from '../../Sign-in-form/sign-in-form.component';
import { StyledAuthentication } from './authentication.styles';

const Authentication = () => {
       
       return (
      <StyledAuthentication>
        <SignInForm/>
        <SignUpForm /> 
  
      </StyledAuthentication>
    );
  };
  
  export default Authentication;