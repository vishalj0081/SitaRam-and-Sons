import { useContext } from 'react';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import  {StyledProductCard, StyledFooterInpcard, ProductName, ProductPrice} from './product-card.styles';


const ProductCard = ({ product }) => {
   const { name, price, imageUrl } = product;
   const { addItemToCart } = useContext(CartContext);
 
   const addProductToCart = () => addItemToCart(product);
   
   return (
<StyledProductCard>
    <img src={imageUrl} alt= {`${name}`}/>

    <StyledFooterInpcard>
     <ProductName>{name}</ProductName>
     <ProductPrice> ₹.{price}</ProductPrice>   
    </StyledFooterInpcard>
    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
</StyledProductCard>
   );
};

export default ProductCard;