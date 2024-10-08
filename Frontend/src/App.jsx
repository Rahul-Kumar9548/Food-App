import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './Pages/verify/verify';
import Myorders from './Pages/Myorders/Myorders';


const App = () => {


  const [showLogin, setshowLogin] = useState(false);


  return (
    <>  
    {showLogin?<LoginPopup setshowLogin={setshowLogin} />:<></>}
    <div className='app'>
          <Navbar setshowLogin={setshowLogin} />
          <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/order' element={<PlaceOrder />} />
                  <Route path='/verify' element={<Verify />} />
                  <Route path='/myorders' element={<Myorders />} />
          </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
