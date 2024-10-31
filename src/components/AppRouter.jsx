import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const user = false;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} />
      ))}
      <Navigate to={CHAT_ROUTE} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} />
      ))}
      <Navigate to={LOGIN_ROUTE} />
    </Routes>
  );
};

export default AppRouter;
