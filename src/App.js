import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import AppNavbar from './component/AppNavbar';
import Cart from './component/Cart';
import Contact from './component/Contact';
import Products from './component/Products';
import MyCarousel from './component/MyCarousel';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path ='/home' exact element={
        <>
          <MyCarousel/>
          <Products/>
        </>}/>
        <Route path ='cart' element={<Cart/>}/>
        <Route path ='about' element={<About/>}/>
        <Route path ='contact' element={<Contact/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
