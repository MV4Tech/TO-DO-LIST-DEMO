import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import AuthGuardWhenLogout from './components/AuthGuardWhenLogout';
import AuthGuardWhenLogin from './components/AuthGuardWhenLogin';
import Register from './pages/register';
import Login from './pages/login';
import AdminLogin from './pages/adminLogin';

import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/dashboard/profile';
import AdminDashboard from './pages/adminDashboard/adminDashboard';
import AdminProfile from './pages/adminDashboard/adminProfile';
import AdminPage from './pages/adminDashboard/adminPage';
import ForgotPassword from './pages/forgotPassword';
import PasswordResetForm from './pages/passwordResetForm';
import AdminForgotPassword from './pages/adminForgotPassword';


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route element={<AuthGuardWhenLogout />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="adminLogin" element={<AdminLogin />} />
            <Route path="forgotPassword" element={<ForgotPassword/>}/>
            <Route path="adminForgotPassword" element={<AdminForgotPassword/>}/>
           <Route path="reset-password/:token" element={<PasswordResetForm/>} />
          </Route>

        </Route>
          <Route element={<AuthGuardWhenLogin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="adminProfile" element={<AdminProfile/>} />
          <Route path="adminPage" element={<AdminPage/>} />
        </Route>
    </>
  )
);
export default App