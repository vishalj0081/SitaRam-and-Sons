
import { createContext,  useReducer} from "react";
import { createAction } from '../utils/Reducer/Reducer.utils';


export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  export const removeCartItem = (cartItems, cartItemToremove) =>{
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToremove.id
    );
    if (existingCartItem.quantity ===1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToremove.id );
    }
  
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToremove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
  
  } ;

    export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
    SET_CART_OPEN:  'SET_CART_OPEN'
 }
 
 const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,

}
 const CartReducer = (state, action) =>{
 const {type, payload} = action; 
     
switch (type) {
case CART_ACTION_TYPES.SET_CART_ITEMS:
return {
...state,
...payload,
};
case 'SET_CART_OPEN':
return{
  ...state,
  isCartOpen: payload, 
}
default:
throw new Error(`Unhandled type ${type} in cartReducer`);
}
};

const clearCartItem = (cartItems, cartItemToClear) => 
   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
 
   export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () =>{},
    clearItemFromCart: ()=>{},
    cartCount: 0,
    cartTotal: 0
    });


export const CartProvider = ({ children }) => {

 
 const [{ cartCount, cartTotal, cartItems, isCartOpen }, dispatch] = useReducer( 
  CartReducer,
  INITIAL_STATE
);

const setIsCartOpen = (bool) => {
  dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, bool ));
}


const updateCartItemsReducer = (cartItems) => {
const newCartCount = cartItems.reduce(
(total, cartItem) => total + cartItem.quantity,
0 );

const newCartTotal = cartItems.reduce(
(total, cartItem) => total + cartItem.quantity * cartItem.price,
0 );

const payload = {
cartItems,
cartCount: newCartCount,
cartTotal: newCartTotal,
};

 dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
};

const addItemToCart = (productToAdd) => {
const newCartItems = addCartItem(cartItems, productToAdd);
updateCartItemsReducer(newCartItems);
};


const removeItemFromCart = (cartItemToRemove) =>{
const newCartItems =  removeCartItem(cartItems, cartItemToRemove);
updateCartItemsReducer(newCartItems);
};
   
const clearItemFromCart = (cartItemToClear)=> {
const newCartItems = clearCartItem(cartItems, cartItemToClear );
updateCartItemsReducer(newCartItems);
};
    

  const value = { 
   isCartOpen, 
   setIsCartOpen, 
   cartItems,
   addItemToCart, 
   cartCount,
   removeItemFromCart,
   clearItemFromCart,
   cartTotal 
  };

  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};




 