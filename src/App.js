
import React from 'react';
import Home from './components/routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from '../src/components/routes/authentication/authentication';
import Shop from './components/routes/shop/shop.component';
import Contact from './components/Contact/contact.component';
import Checkout from '../src/components/routes/checkout/checkout.component';
import { GlobalStyles } from './global.styles';
const  App = () => {
 return (
   <div>
   <GlobalStyles/>
   
   <Routes> 
  <Route path='/' element = {<Navigation /> }>
   <Route index element = { <Home /> } />
    <Route path='Shop/*' element = { <Shop /> } />
    <Route path='auth' element = { <Authentication /> } />
    <Route path='Contact' element = {<Contact/>}/>
    <Route path ='Checkout' element = {<Checkout/>} />
       </Route>
   </Routes> 
   </div> 
  
); 

};

export default App;
