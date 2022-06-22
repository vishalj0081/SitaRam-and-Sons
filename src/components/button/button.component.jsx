
import { StyledBaseButton, StyledGoogleSignInButton, StyledInvertedButton, StyledDropcartButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
    dropcart: 'dropcart'
   };

   const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
   ({
    [BUTTON_TYPE_CLASSES.base]: StyledBaseButton,
    [BUTTON_TYPE_CLASSES.google]: StyledGoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: StyledInvertedButton,
    [BUTTON_TYPE_CLASSES.dropcart]: StyledDropcartButton,
   }[buttonType]);
  
   const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
  };
  
  export default Button;