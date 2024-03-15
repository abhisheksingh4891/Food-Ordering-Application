import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Cart from './Cart';
import Orders from './Orders';

const ParentComponent = () => {
  // Define state to hold cart data
  const [cartData, setCartData] = useState([]);

  // Callback function to receive cart data from Cart component
  const handleProceedToPay = (cartItems) => {
    // Update state with cart data
    setCartData(cartItems);
    // You can perform any additional actions here, like navigating to another component
    // using history.push, if needed.
  };

  return (
    <div>
      <Navbar />
      {/* Render Cart component and pass the callback function as a prop */}
      <Cart onProceedToPay={handleProceedToPay} />
      {/* Render Orders component and pass cart data as a prop */}
      <Orders cartData={cartData} />
    </div>
  );
};

export default ParentComponent;
