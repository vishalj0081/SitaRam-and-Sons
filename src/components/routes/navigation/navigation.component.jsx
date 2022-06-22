
import { Fragment, useContext } from 'react';
import { Outlet } from "react-router-dom";
import {ReactComponent as Crownlogo} from '../../../assests/crown.svg';
import CartIcon from '../../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../../context/user.context';
import {CartContext} from '../../../context/cart.context';
import { SignOutUser } from '../../../utils/firebase/firebase.utils';
import { StyledNavigation, StyledLogo, StyledNavLinks, StyledNavLink } from './navigation.styles';


const Navigation =()=>{
const {currentUser} = useContext(UserContext);
const {isCartOpen} = useContext(CartContext);
return(
<Fragment>
<StyledNavigation>
  <StyledLogo to ='/'>
   <Crownlogo className='logo'/>
    </StyledLogo> 

   <StyledNavLinks> 
    <StyledNavLink to='/Shop' >
     SHOP
    </StyledNavLink>
   
   <StyledNavLink to ='/Contact'>
    CONTACT
   </StyledNavLink>

  { currentUser ?(
  <StyledNavLink as='span' onClick={SignOutUser}> SIGN OUT </StyledNavLink>
  ) : (
  <StyledNavLink to='auth' >
  SIGN IN
  </StyledNavLink>
  ) } 

  <CartIcon/> 
       
  </StyledNavLinks>
  { isCartOpen && <CartDropdown/>}
  </StyledNavigation>
<Outlet />
</Fragment>
);
};

export default Navigation;

