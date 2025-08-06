import { useState } from "react";
import { CartContext } from "./CartContext"

function CartProvider({children}) {

const [cart, setCart] = useState([]);
    
const setQuantity = (product, quantity) => {
  if (!quantity) {
    setCart(prevCart =>
      prevCart.filter(itemCart => itemCart.prod.id !== product.id)
    );
  } else {
    setCart(prevCart => {
      const foundProduct = prevCart.find(({ prod }) => prod.id === product.id);

      if (!foundProduct) {
        return [...prevCart, { prod: product, quantity }];
      } else {
        return prevCart.map(itemCart =>
          itemCart.prod.id === product.id
            ? { prod: product, quantity }
            : itemCart
        );
      }
    });
  }
};

    const totalQuantity = cart.reduce(  (acc, currentProd) => acc + currentProd.quantity, 0)

  return (
    <CartContext.Provider value={{
        cart,
        setQuantity,
        totalQuantity
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider