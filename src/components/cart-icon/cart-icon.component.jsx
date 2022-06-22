import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { StyledCartIcon, StyledShoppingIcon, StyledItemCount } from  './cart-icon.styles';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
    return (
      <StyledCartIcon onClick={toggleIsCartOpen}>
        <StyledShoppingIcon />  
        <StyledItemCount> {cartCount} </StyledItemCount>
      </StyledCartIcon>
    );
  };
  
  export default CartIcon;