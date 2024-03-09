// context.js
import React, { createContext, useState } from 'react';

export const FoodContext = createContext({});

const FoodContextProvider = (props) => {

  const [isLogin, setIsLogin] = useState(false);

  const contextValue = {setIsLogin, isLogin};

  return (
    <FoodContext.Provider value={contextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
