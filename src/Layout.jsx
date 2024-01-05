import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from './components/shared/Header.jsx';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
