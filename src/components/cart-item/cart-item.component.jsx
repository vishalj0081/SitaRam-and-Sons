
import { StyledCartItem, StyledCartItemDetails, StyledNamePrice } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;
   
     return (
      <StyledCartItem>
        <img src={imageUrl} alt={`${name}`} />
        <StyledCartItemDetails>
          <StyledNamePrice>{name}</StyledNamePrice>
          <StyledNamePrice>
            {quantity } x ₹.{price}
          </StyledNamePrice>
        </StyledCartItemDetails>
      </StyledCartItem>
    );
  
  };
  
  export default CartItem;