import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import './assets/app.css';
// import {AppRoutes} from './Admin/index';
import Admin from './Admin/admin';
import Dash from "./Admin/admincomp/Home";
import Users from "./Admin/user/users";
import EditUserForm from "./Admin/user/useredit";
import Deleteuser from "./Admin/user/userdelete";
import Category from "./Admin/Category/category";
import EditCatForm from "./Admin/Category/catedit";
import Deletecat from "./Admin/Category/catdelete";

import Adminprod from './Admin/products/product';
import EditProductForm from './Admin/products/prodedit';
import Deletepro from './Admin/products/proddelete';




import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound,  } from './pages';


const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Products />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/product/*" element={<PageNotFound />} />
  </Routes>
);

const AdminRoutes = () => (
  
  <Routes>
    <Route path="/admin" element={<Dash />} />
    <Route path="/admin/users" element={<Users />} />
    <Route path="/admin/user/edit/:id" element={<EditUserForm />} />
    <Route path="/admin/user/delete/:id" element={<Deleteuser />} />
    <Route path="/admin/category" element={<Category />} />
    <Route path="/admin/category/delete/:id" element={<Deletecat />} />
    <Route path="/admin/category/edit/:id" element={<EditCatForm />} />
    <Route path="/admin/product" element={<Adminprod />} />
    <Route path="/admin/products/edit/:id" element={<EditProductForm />} />
    <Route path="/admin/products/delete/:id" element={<Deletepro />} />
  </Routes>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Provider store={store}>
    {window.location.pathname.startsWith('/admin') ? (
   
      <AdminRoutes />
    ) : (
      <MainRoutes />
    )}
  </Provider>
</BrowserRouter>
);
