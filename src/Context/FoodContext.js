import React, { createContext, useState } from 'react';

export const FoodContext = createContext({});

const FoodContextProvider = (props) => {

  const [isLogin, setIsLogin] = useState(false);
  const [mLogin, setMLogin] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(1);
  // const [cartTotal, setCartTotal] = useState(0);
    
  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
};


  const contextValue = {count, setCount, setIsLogin, isLogin, mLogin, setMLogin, addToCart, cartItems, setCartItems};

  return (
    <FoodContext.Provider value={contextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
