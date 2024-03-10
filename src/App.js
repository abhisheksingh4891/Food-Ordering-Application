import './App.css';
import Footer from './Componenets/Footer';
import Login from './Componenets/Login';
import Navbar from './Componenets/Navbar';
import Register from './Componenets/Register';
import FoodContextProvider from './Context/FoodContext';
import Home from './Screen/Home';
import Cart from './Screen/Cart';
import Orders from './Screen/Orders';
import Profile from './Componenets/MyProfile'
import {Route, Routes } from 'react-router-dom';
// import useState from 'react'

const App = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(loggedIn, "login");
  // const [login, setLogin] = useState(false);
  return (
    <div className="App bg-light w-100 m-0 mr-0">
    <FoodContextProvider>

      <Navbar/>
        <Routes>
          <Route path='/' element={loggedIn ?  <Home/> : <Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/cart' element={loggedIn ? <Cart/> : <Login/> } />
          <Route path='/orders' element={loggedIn ?  <Orders/> : <Login/> } />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      <Footer/>
    </FoodContextProvider>
    </div>
  );
}

export default App;
