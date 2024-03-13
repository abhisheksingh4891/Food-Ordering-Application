import './App.css';
import Footer from './User/Components/Footer';
import Login from './User/Components/Login';
// import Navbar from './User/Components/Navbar';
import Register from './User/Components/Register';
import FoodContextProvider from './Context/FoodContext';
import Home from './User/Screen/Home';
import Cart from './User/Screen/Cart';
import Orders from './User/Screen/Orders';
import Profile from './User/Components/MyProfile'
import Select from './Select'
import {Route, Routes } from 'react-router-dom';
import LoginMerchant from './AdminPanel/Components/LoginMerchant';
import RegisterMerchant from './AdminPanel/Components/RegisterMerchant';
import HomeAdmin from './AdminPanel/Screen/HomeAdmin';

const App = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(loggedIn, "login");

  const merchantLoggedIn = window.localStorage.getItem("merchantLogin");
  console.log(merchantLoggedIn, "login");



  return (
    <div className="App bg-light w-100 m-0 mr-0">
    <FoodContextProvider>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Select/>} />

          {/* // user Routes */}
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={ window.localStorage.getItem("isLoggedIn") ? <Home/> : <Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/profile' element={<Profile/>} />

          {/* // merchant routes */}
          <Route path='/loginmerchant' element={<LoginMerchant/>} />
          <Route path='/registermerchant' element={<RegisterMerchant/>} />
          <Route path='/homeadmin' element={merchantLoggedIn ? <HomeAdmin/> : <LoginMerchant/>} />
        </Routes>
      <Footer/>
    </FoodContextProvider>
    </div>
  );
}

export default App;
