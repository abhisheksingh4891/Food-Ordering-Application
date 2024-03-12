import React, { useContext } from 'react';
import { FoodContext } from '../../Context/FoodContext';
import Navbar from '../Components/Navbar';

const Cart = () => {
  const { cartItems, count, setCount } = useContext(FoodContext);

  function increment(item){
    setCount(count+1)
  }
  function decrement(){
    if(count===0){

    }
    setCount(count-1);
  }
  
  return (
    <div className="container-fluid py-2" style={{"backgroundImage":"url('https://t3.ftcdn.net/jpg/05/40/57/24/360_F_540572408_RX2AsVFgiiLM1rZDAIJKMwsYpPn1VR6f.jpg')"}}>
      <Navbar />
      <div className="container-fluid py-5">
        <h2 className="text-white pt-4 text-center"><u>Your Cart</u></h2>
        {cartItems.length === 0 ? (
          <p className="text-white py-4 mx-5 fs-4">Your cart is empty!</p>
        ) : (  
          <ul className="list-group d-flex flex-column gap-2 pt-4 mx-5">
            <li className="list-group-item bg-dark text-white" style={{ opacity:'0.8'}}>
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <div className="col" style={{ width: '120px'}} ></div>
                    </div>
                    <div className="col">Name</div>
                    <div className="col">Price</div>
                    <div className="col d-flex gap-1">
                      <div className="col mx-4">Quantity</div>
                    </div>
                    <div className="col">Total</div>
                  </div>
                </li>
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item bg-dark text-white" style={{ opacity:'0.8'}}>
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img src={item.img} alt={item.name} style={{ width: '120px', height: '100px' }} />
                  </div>
                  <div className="col">{item.name}</div>
                  <div className="col">Rs. {item.price}</div>
                  <div className="col d-flex gap-1">
                    <button className="btn btn-dark" onClick={decrement}>-</button>
                    <p className="btn btn-dark">{item.qty = count}</p>
                    <button className="btn btn-dark" onClick={increment}>+</button>
                  </div>
                  <div className="col">Rs. {item.price*count}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <hr className="fw-bold"/>
      <div className="text-white">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Cart;
