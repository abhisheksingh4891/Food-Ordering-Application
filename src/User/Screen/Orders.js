import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import { FoodContext } from '../../Context/FoodContext';
import bg5 from '../../Assets/bg1.jpg'

const Orders = () => {
  const { cartItems, proceedToPay } = useContext(FoodContext);

  // Calculate total amount and item count
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="container-fluid py-2" style={{fontFamily:'Raleway', backgroundImage:`url(${bg5})`, backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)'}}>
      <Navbar />
      <div className="container-fluid py-5 text-white">
        <h1 className="text-center mt-5"><u>My Orders</u></h1>
        <div className="container-fluid d-flex justify-content-center align-items-center py-2 text-white">
        {/* Check if the user has proceeded to pay */}
        {proceedToPay && (
          <div className="card mt-5 text-white bg-dark" style={{width:'100vh'}}>
            <div className="card-header">
              <h5 className="card-title">Order Summary</h5>
            </div>
            <div className="card-body">
              {/* Display item count and total amount */}
              <p>Items: {itemCount}</p>
              <p>Total Amount: Rs. {totalAmount}</p>
              {/* Display item names */}
              <ul className="list-group">
                {cartItems.map((item, index) => (
                  <div key={index} className="list-group-item d-flex justify-content-between gap-4">
                  <h6  >{item.name}</h6>
                  <h6  >Quantity: {item.quantity}</h6>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
