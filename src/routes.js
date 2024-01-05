import React from 'react';

import AllCalls from './pages/AllCalls.jsx';
import NotFound from './pages/NotFound.jsx';

// Lazy loading pages
const CallDetail = React.lazy(() => import('./pages/CallDetail.jsx'));
const ArchivedCalls = React.lazy(() =>
  import('./pages/ArchivedCalls.jsx')
);

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
    path: '/call/:callId',
    element: React.createElement(CallDetail),
  },
  {
    path: '/archived-calls',
    element: React.createElement(ArchivedCalls),
  },
  {
    path: '*',
    element: React.createElement(NotFound),
  },
];
