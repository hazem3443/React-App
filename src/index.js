import React from 'react';
import reactDom from 'react-dom';
import {BrowserRouter
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link
  } from "react-router-dom";
// import ReactDom from 'react-dom';
// import Product from "./components/product";
// import ShopingCart from './components/shopingCart';
import App from './components/app';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/react-toastify/dist/ReactToastify.css';

reactDom.render(
<BrowserRouter>
    <App />
</BrowserRouter>
,document.querySelector("#root"));
