import './App.css';
import Footer from './Componenets/Footer';
import Login from './Componenets/Login';
import Navbar from './Componenets/Navbar';
import Register from './Componenets/Register';
import FoodContextProvider from './Context/FoodContext';
import Home from './Screen/Home';
import { Route, Routes } from 'react-router-dom';
// import useState from 'react'

const App = () => {

  // const [login, setLogin] = useState(false);
  return (
    <div className="App bg-light">
    <FoodContextProvider>

      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      <Footer/>
    </FoodContextProvider>
    </div>
  );
}

export default App;
