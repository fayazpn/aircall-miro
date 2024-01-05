import React from 'react';
import AllCalls from './pages/AllCalls.jsx';
import NotFound from './pages/NotFound.jsx';

export const publicRoutes = [
  {
    path: '/',
    element: React.createElement(AllCalls),
  },
  {
    path: '/all-calls',
    element: React.createElement(AllCalls),
  },
  {
    path: '*',
    element: React.createElement(NotFound),
  },
];
