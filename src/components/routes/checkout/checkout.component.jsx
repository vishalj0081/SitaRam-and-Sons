import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import {StyledCheckoutcontainer, Checkoutheader, HeadBlock, CheckoutTotal, Emptymessage } from './checkout.styles';

const Checkout = ()=> {
const { cartItems, cartTotal } = useContext(CartContext);
    return(
        <StyledCheckoutcontainer>
        <Checkoutheader>
        <HeadBlock> 
            <span> Products </span>
              </HeadBlock>

            <HeadBlock> 
             <span> Description </span>
               </HeadBlock>

            <HeadBlock> 
             <span> Quantity </span>
               </HeadBlock>

            <HeadBlock> 
              <span> Price </span>
               </HeadBlock>

            <HeadBlock> 
             <span> Remove </span>
               </HeadBlock>

        </Checkoutheader>

        {
          cartItems.length ? (
            cartItems.map((cartItem) => {
            return(
            
            <CheckoutItem key ={cartItem.id} cartItem={cartItem} />

            )
            }
              
            ))
            
           : (
            <Emptymessage> Your cart is empty </Emptymessage>
          )}
        <CheckoutTotal> Total: ₹ {cartTotal} </CheckoutTotal>
        </StyledCheckoutcontainer>
    );
};

export default Checkout;