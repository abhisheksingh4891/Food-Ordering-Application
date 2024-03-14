import React, { useContext } from 'react';
import { FoodContext } from '../../Context/FoodContext';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import bg5 from '../../Assets/bg8.jpg'

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, setProceedToPay} = useContext(FoodContext);

  const navigate = useNavigate();

  const handleProceedToPay = () => {
    setProceedToPay(true);
    setTimeout(() => {
      navigate('/orders')
      // clearCart();
    },800);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container-fluid py-2" style={{fontFamily:'Raleway', backgroundImage:`url(${bg5})`, backgroundSize: 'cover', backgroundPosition: 'center', filter:'brightness(80%)'}}>
      <Navbar />
      <div className="container-fluid py-5">
        <h2 className="text-white pt-4 text-center"><u>Your Cart</u></h2>
        {cartItems.length === 0 ? (
          <p className="text-white py-4 mx-5 fs-4">Your cart is empty!</p>
        ) : (  
          <ul className="list-group d-flex flex-column gap-2 pt-4 mx-5" >
            <li className="list-group-item bg-dark text-info fw-bold" style={{ opacity: '0.9'}}>
              <div className="row align-items-center">
                <div className="col-auto">
                  <div className="col" style={{ width: '120px'}} ></div>
                </div>
                <div className="col">Name</div>
                <div className="col">Price</div>
                <div className="col d-flex gap-1">
                  <div className="col mx-3">Quantity</div>
                </div>
                <div className="col">Total</div>
                <div className="col"></div>
              </div>
            </li>
            {cartItems.map((item) => (
              <li key={item._id} className="list-group-item bg-dark text-info fw-bold" style={{ opacity: '0.9'}}>
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img src={item.img} alt={item.name} style={{ width: '120px', height: '100px' }} />
                  </div>
                  <div className="col">{item.name}</div>
                  <div className="col">Rs. {item.price}</div>
                  <div className="col d-flex gap-1 justify-items-center">
                    <button className="btn btn-dark shadow-none fs-2" onClick={() => decrementQuantity(item._id)}>-</button>
                    <button className="btn btn-dark text-info">{item.quantity}</button>
                    <button className="btn btn-dark shadow-none fs-2" onClick={() => incrementQuantity(item._id)}>+</button>
                  </div>
                  <div className="col">Rs. {item.price * item.quantity}</div>
                  <div className="col"><button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>Remove</button></div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <hr className="fw-bold"/>
      <div className="text-white">
        <h1>Cart Total = {cartTotal}</h1>
        <button className="btn btn-success rounded" onClick={handleProceedToPay}>Proceed to pay</button>
      </div>
        </div>
  );
};

export default Cart;

