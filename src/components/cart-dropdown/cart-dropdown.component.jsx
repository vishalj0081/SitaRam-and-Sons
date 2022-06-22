import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {CartContext} from '../../../src/context/cart.context';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {StyledCartDropdown, EmptyMessage, StyledCartItemsinDropdown } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
   const Navigate = useNavigate();  
   const gotoCheckoutHandler = ( ) =>{
    Navigate('/Checkout')
   }
    return (
      <StyledCartDropdown>
        <StyledCartItemsinDropdown>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <EmptyMessage> Your cart is empty</EmptyMessage>
          )}
        </StyledCartItemsinDropdown>
       <Button buttonType={ BUTTON_TYPE_CLASSES.dropcart } onClick={gotoCheckoutHandler}> GO TO CHECKOUT</Button>
      </StyledCartDropdown>
    );
  };
  
  export default CartDropdown;