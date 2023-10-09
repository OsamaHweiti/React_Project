import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './admin.css';
import Header from './admincomp/Header';
import Sidebar from './admincomp/Sidebar';
// import Home from './admincomp/Home';
import {AppRoutes} from './index';
// import { useLocation } from 'react-router-dom';

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      {/* <Home /> */}
      {/* <Routes>
        {AppRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes> */}
    </div>
  );
}

export default Admin;
