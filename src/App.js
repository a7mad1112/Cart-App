import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './component/AppNavbar';
import Cart from './component/Cart';
import Products from './component/Products';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path ='/' exact element={<Products/>}/>
        <Route path ='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
