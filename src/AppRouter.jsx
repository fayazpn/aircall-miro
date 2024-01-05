import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import FallbackLoading from './components/loading/FallbackLoading.jsx';
import { publicRoutes } from './routes';

const AppRouter = () => {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        <Route element={<Layout />}>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
