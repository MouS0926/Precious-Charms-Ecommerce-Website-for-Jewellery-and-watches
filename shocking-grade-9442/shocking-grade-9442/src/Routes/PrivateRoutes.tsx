import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}:any) => {
  const AdminAuth =useSelector((store:any)=>{
    return store.authReducer.isAdminAuth;
  })
  const isAuth = useSelector((store:any)=>{
    return store.authReducer.isAuth;
  })
  const location = useLocation();
  console.log(location);
  if(AdminAuth){
    return children;
  }
  if(isAuth){
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace={true}/>;
}

export default PrivateRoutes;
