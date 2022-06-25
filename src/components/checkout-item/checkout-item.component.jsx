import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { 
  StyledCheckoutItemContainer, 
  StyledImageContainer, 
  StyledCheckoutNamePrice,
  StyledCheckoutQuantity,
  StylCheckoutArrow,
  StylCgeckoutValue,
  StylCheckoutXbutton  } from './checkout-item.styles';


const CheckoutItem = ({cartItem}) =>{
const { imageUrl, price, name, quantity } = cartItem;
const {addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

const clearItemHandler = () => clearItemFromCart(cartItem);
const incrementItemHandler = () => removeItemFromCart(cartItem);
const decrementItemHandler = () => addItemToCart(cartItem);

  return (

<StyledCheckoutItemContainer>
<StyledImageContainer>
<img src= {imageUrl} alt={`{name}`}/>
</StyledImageContainer>
<StyledCheckoutNamePrice> {name} </StyledCheckoutNamePrice>
<StyledCheckoutQuantity>  
<StylCheckoutArrow onClick={incrementItemHandler}> &#10094; </StylCheckoutArrow>
<StylCgeckoutValue> {quantity} </StylCgeckoutValue>
<StylCheckoutArrow onClick={decrementItemHandler}> &#10095; </StylCheckoutArrow>
</StyledCheckoutQuantity>
<StyledCheckoutNamePrice> ₹{price} </StyledCheckoutNamePrice>
<StylCheckoutXbutton onClick={clearItemHandler}>
&#10005;
</StylCheckoutXbutton>
</StyledCheckoutItemContainer>
    );
};

export default CheckoutItem;