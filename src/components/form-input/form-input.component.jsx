
import { FormInputGroup, StyledFormInput, StyledFormInputLabel } from  './form-input.styles';


const FormInput = ({ label, ...otherProps}) => {
return (
 <FormInputGroup>
 <StyledFormInput {...otherProps} />
     {label && (
     <StyledFormInputLabel shrink = {otherProps.value.length}  > 
{label}
 </StyledFormInputLabel>
     )}

  </FormInputGroup>
);
};

export default FormInput;