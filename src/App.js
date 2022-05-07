import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Futter from './Component/Futter/Futter';
import Header from './Component/Heander/Header';
import Home from './Component/Home/Home';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login/Login'
import Register from './Component/Login/Register/Register'
import Notfound from './Component/Notfound/Notfound';
import Update from './Component/Update/Update';

function App() {
  return (
    <div>

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

        <Route path='products/:id' element={<Update></Update>}></Route>



      <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>


      <Futter> </Futter>
      <ToastContainer></ToastContainer>
     
    </div>
 
  );
}

export default App;
