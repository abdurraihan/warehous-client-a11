import 'bootstrap/dist/css/bootstrap.min.css';

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
import RequireAuth from './Component/Login/RequireAuth/RequireAuth'
import MyItem from './Component/MYItem/MyItem';
import AddItem from './Component/AddItem/AddItem';
import Blog from './Component/Blog/Blog';



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
        <Route path='/myItem' element={<MyItem></MyItem>}> </Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/blog'  element={<Blog></Blog>}></Route>
        <Route path='/products/:productId'
         element={
           <RequireAuth> 
         <Update></Update>
         </RequireAuth>
         }>
           
         </Route>



      <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>


      <Futter> </Futter>
     
     
    </div>
 
  );
}

export default App;
