import React from 'react';

import { Link, Outlet } from 'react-router-dom';
import Header from './components/shared/Header.jsx';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Outlet />
        <Link to="/all-calls">
          <button>Click me</button>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
