import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { IsLoginState } from '../Atom/atom';

const RequireAuth = ({ children, to }) => {
  const isAlreadyLogin = useRecoilValue(IsLoginState);

  if (to === '/mainpage' && isAlreadyLogin) {
    return <Navigate to={to} replace />;
  } else if (!isAlreadyLogin) {
    return <Navigate to={to} replace />;
  }
  return children;
};

export default RequireAuth;
