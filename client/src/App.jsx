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

import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/dashboard/profile';

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route element={<AuthGuardWhenLogout />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />       
          </Route>
        </Route>
         {/* <Route element={<AuthGuardWhenLogin />}>*/}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile/>} />
        {/*</Route>*/}
    </>
  )
);
export default App