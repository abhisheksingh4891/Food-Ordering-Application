import React, { useContext } from 'react';
import { FoodContext } from '../../Context/FoodContext';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import bg5 from '../../Assets/car5.jpg';

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, setProceedToPay} = useContext(FoodContext);
  const navigate = useNavigate();

  const handleProceedToPay = () => {
    setProceedToPay(true);
    setTimeout(() => {
      navigate('/orders')
    }, 800);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container-fluid py-2" style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={bg5} alt="background" className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover', filter:'brightness(30%)' }} />
      <div className="position-relative" style={{ zIndex: 1 }}>
        <Navbar />
        <div className="container-fluid py-5">
          <h2 className="pt-4 text-center fw-bold fs-1" style={{ fontFamily: 'Raleway', color:'#0303FC '}}><u>Your Cart</u></h2>
          {cartItems.length === 0 ? (
            <p className="py-4 mx-3 mx-md-5 fs-4 text-center fw-bold" style={{ fontFamily: 'Raleway', color:'#0303FC'}}>Your cart is empty!</p>
          ) : (
            <ul className="list-group pt-4 mx-3 mx-md-5 gap-2">
              <li className="list-group-item bg-dark text-info fw-bold" style={{ opacity: '0.9' }}>
                <div className="row align-items-center">
                  <div className="col-md-2 d-none d-md-block"></div>
                  <div className="col fw-bold" style={{ fontFamily: 'Raleway'}}>Name</div>
                  <div className="col fw-bold" style={{ fontFamily: 'Raleway'}}>Price</div>
                  <div className="col">
                      <button className="btn btn-dark shadow-none fs-2"></button>
                      <span className="btn btn-dark text-info fw-bold" style={{ fontFamily: 'Raleway'}}>Quantity</span>
                      <button className="btn btn-dark shadow-none fs-2"></button>
                    </div>
                  <div className="col fw-bold" style={{ fontFamily: 'Raleway'}}>Total</div>
                  <div className="col"></div>
                </div>
              </li>
              {cartItems.map((item) => (
                <li key={item._id} className="list-group-item bg-dark text-info fw-bold" style={{ opacity: '0.9' }}>
                  <div className="row align-items-center">
                    <div className="col-md-2 d-none d-md-block">
                      <img src={item.img} alt={item.name} style={{ width: '80px', height: '80px' }} />
                    </div>
                    <div className="col" style={{ fontFamily: 'Raleway'}}>{item.name}</div>
                    <div className="col">Rs. {item.price}</div>
                    <div className="col">
                      <button className="btn btn-dark shadow-none fs-2" onClick={() => decrementQuantity(item._id)}>-</button>
                      <span className="btn btn-dark text-info fw-bold">{item.quantity}</span>
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
        <hr className="fw-bold" />
        <div className="text-white container-fluid d-flex justify-content-between align-items-center mx-3 mx-md-2" style={{ fontFamily: 'Raleway'}}>
          <h1>Cart Total = {cartTotal}</h1>
          <button className="btn btn-success rounded" onClick={handleProceedToPay}>Proceed to pay</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
