import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {UserProvider} from '../src/context/user.context';
import {CategoriesProvider} from '../src/context/categories.context';
import {CartProvider} from '../src/context/cart.context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <UserProvider>
    <CategoriesProvider>
      <CartProvider>

      <App />

      </CartProvider>
       </CategoriesProvider>
       </UserProvider>
  
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
