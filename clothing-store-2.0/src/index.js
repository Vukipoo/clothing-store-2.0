import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from "./contexts/cart.context";



import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
      <CategoriesProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </CategoriesProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
  
);

