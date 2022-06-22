
import { useEffect } from "react";
import { createContext, useState } from "react";



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

export const clearCartItem = (cartItems, cartItemToClear) => 
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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcardCount] = useState (0);
  const [cartTotal, setcartTotal] = useState (0)

  useEffect (()=> {
  const newcartCount = cartItems.reduce((accumulator, cartItem ) => 
  accumulator + cartItem.quantity, 0)
  setcardCount(newcartCount);
  }, [cartItems])


  useEffect(() => {
    const newcartTotal = cartItems.reduce((accumulator, cartItem ) =>
    accumulator + cartItem.quantity * cartItem.price,
     0
     );
    setcartTotal(newcartTotal)
  }, [cartItems]);

    const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

    const removeItemFromCart = (cartItemToRemove) =>
    setCartItems(removeCartItem(cartItems, cartItemToRemove));

    const clearItemFromCart = (cartItemToClear)=>
    setCartItems(clearCartItem(cartItems, cartItemToClear ));

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal };

  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
