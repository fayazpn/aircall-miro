import React from 'react';

import AllCalls from './pages/AllCalls.jsx';
import NotFound from './pages/NotFound.jsx';
import { ROUTE_CONSTANTS } from './constants/constants.js';

// Lazy loading pages
const CallDetail = React.lazy(() => import('./pages/CallDetail.jsx'));
const ArchivedCalls = React.lazy(() =>
  import('./pages/ArchivedCalls.jsx')
);

export const publicRoutes = [
  {
    path: ROUTE_CONSTANTS.DEFAULT,
    element: React.createElement(AllCalls),
  },
  {
    path: ROUTE_CONSTANTS.ALL_CALLS,
    element: React.createElement(AllCalls),
  },
  {
    path: ROUTE_CONSTANTS.CALL_DETAILS,
    element: React.createElement(CallDetail),
  },
  {
    path: ROUTE_CONSTANTS.ARCHIVED_CALLS,
    element: React.createElement(ArchivedCalls),
  },
  {
    path: '*',
    element: React.createElement(NotFound),
  },
];
