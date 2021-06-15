import React from 'react';
import EmployeeActionPage from './pages/EmployeeActionPage/EmployeeActionPage';
import EmployeeListPage from './pages/EmployeeListPage/EmployeeListPage';
import HomePage from './pages/HomePage/HomePage'
import TimeKeepingPage from './pages/HomePage/TimeKeepingpage/TimekeepingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/RegisterPage'

const routes = [
    {
        path : '/',
        exact : true,
        main: ()=> <Login/>
    },
    {
        path : '/home',
        exact : true,
        main: ()=> <HomePage/>
    },
    {
        path : '/employee-list',
        exact : false,
        main: ()=> <EmployeeListPage/>
    },
    {
        path : '/login',
        exact : false,
        main: ()=> <Login/>
    },
    {
        path : '/register',
        exact : false,
        main: ()=> <Register/>
    },
    {
        path : '/employee/add',
        exact : false,
        main: ({history})=> <EmployeeActionPage history={history}/>
    },
    {
        path : '/employee/:id/edit',
        exact : false,
        main: ({history, match})=> <EmployeeActionPage history={history} match={match}/>
    },
    {
        path : '/timekeeping',
        exact : false,
        main: ()=> <TimeKeepingPage/>
    },
    {
        path : '',
        exact : false,
        main: ()=> <NotFoundPage/>
    }
   
];
export default routes;