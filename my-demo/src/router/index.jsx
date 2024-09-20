import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Login = lazy(() => import('../page/LoginPage/LoginPage'));
const Register = lazy(() => import('../page/RegisterPage/RegisterPage'));

const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    // 默认路由，当访问不存在的路径时，重定向到 '/login'
    {
        path: '*',
        element: <Navigate to="/login" replace />,
    },
];

export default routes;
