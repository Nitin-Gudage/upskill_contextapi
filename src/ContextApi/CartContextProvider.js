import React, { useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    setCartList(prevCartList => {
      const existingItem = prevCartList.find(data => data.id === item.id);
      if (!existingItem) {
        return [...prevCartList, { ...item, count: 1 }];
      } else {
        console.log('Already present in cart');
        return prevCartList;
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartList((prevCartList) => prevCartList.filter((data) => data.id !== itemId));
  };

  const updateCartItem = (item, increment) => {
    setCartList((prevCartList) =>
      prevCartList.map((data) => {
        if (data.id === item.id) {
          if (increment) {
            return { ...data, count: data.count + 1 };
          } 
          else {
            if (data.count <= 1) {
              removeFromCart(item.id)
            }
            return { ...data, count: data.count - 1 };
          }
        }
        return data;
      })
    );
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartContextProvider;