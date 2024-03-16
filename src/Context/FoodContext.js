// FoodContextProvider.js
import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
import DuplicateItemModal from './Modal/DuplicateItemModal';
import SuccessItemModal from './Modal/SuccessItemModal';

// const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

export const FoodContext = createContext({});

const FoodContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [mLogin, setMLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [successShowModal, setSuccessShowModal] = useState(false);
  const [proceedToPay, setProceedToPay] = useState(false);
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState({});
  const [merchantData, setMerchantData] = useState({});

  // console.log(userData);
  // console.log(merchantData);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsLogin(true);
    }
  }, [setIsLogin]);

  useEffect(() => {
    const merchantLogin = localStorage.getItem("merchantLogin");
    if (merchantLogin) {
      setMLogin(true);
    }
  }, [setMLogin]);

  const addToCart = (item) => {
    if (item && typeof item === 'object' && '_id' in item) {
      const isDuplicate = cartItems.some((data) => item._id === data._id);
      if (!isDuplicate) {
        setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
        setSuccessShowModal(true);
        setTimeout(() => {
          setSuccessShowModal(false);
        }, 800);
      } else {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 800);
      }
    } else {
      console.error("Invalid item object:", item);
      // Optionally handle error or provide feedback to user
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== id));
  };

  const incrementQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    setIsLogin,
    isLogin,
    addToCart,
    cartItems,
    setCartItems,
    showModal,
    setShowModal,
    successShowModal,
    setSuccessShowModal,
    proceedToPay,
    setProceedToPay,
    clearCart,
    setMLogin, 
    mLogin,
    user, 
    setUser,
    userData,
    setUserData,
    merchantData,
    setMerchantData
  };

  return (
    <FoodContext.Provider value={contextValue}>
      {
        successShowModal ? (
          <SuccessItemModal show={successShowModal} handleClose={() => setSuccessShowModal(false)} />
        ) : (
          <DuplicateItemModal show={showModal} handleClose={() => setShowModal(false)} />
        )
      }
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
