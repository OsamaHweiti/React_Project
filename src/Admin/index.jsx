import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dash from "./admincomp/Home";
import Users from "./user/users";
import EditUserForm from "./user/useredit";
import Deleteuser from "./user/userdelete";
import Category from "./Category/category";
import EditCatForm from "./Category/catedit";
import Deletecat from "./Category/catdelete";

import Adminprod from './products/product';
import EditProductForm from './products/prodedit';
// import Product from './products/product';



// import Category from "./Category/category";





const AppRoutes = [
    { path: '/admin', component: Dash},
    { path: '/admin/users', component: Users},
    { path: '/admin/user/edit/:id', component: EditUserForm},
    // { path: '/admin/users/delete/:user_id', component: Deleteuser},
     { path: '/admin/user/delete/:id', component: Deleteuser }, // Change path to '/admin/user/delete/:user_id'
    { path: '/admin/category', component: Category},
    { path: '/admin/category/delete/:id', component: Deletecat }, // Change path to '/admin/user/delete/:user_id'
    { path: '/admin/categor/edit/:id', component: EditCatForm},
    { path: '/admin/product', component: Adminprod},
    { path: '/admin/product/delete/:id', component: Deleteuser }, // Change path to '/admin/user/delete/:user_id'
    { path: '/admin/products/edit/:id', component: EditProductForm},


    
    
]

export { AppRoutes };