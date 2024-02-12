
// PrivateRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export const PrivateRoute = ({ path, element }) => {
//   const isAuth = useSelector((state) => state);
//   console.log(isAuth)
//   return isAuth ? (
//     <Route path={path} element={element} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default PrivateRoute;


import React from "react";

import { useSelector } from "react-redux";
import {Login} from '../pages/Login'
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {

  const auth = useSelector((store) => store.authReduer.isAuth);
  const location = useLocation()
  // console.log(location)

  return  auth ? children : <Navigate state={location.pathname} to={'/login'}/>
};