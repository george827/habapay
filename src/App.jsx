
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/session/Home';
import Login from './components/session/Login';
import Signin from './components/session/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import ManageUsers from './components/ManageUsers';
import ManageUsers2 from './components/manageuser2/ManageUsers2';
import EditAccount from './components/frame/EditAccount';
import DeleteUser from './components/frame/DeleteUser';
import SuspendUser from './components/frame/SuspendUser';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={< Dashboard />}/>
          <Route path="/manageusers" element={< ManageUsers/>}/>
          <Route path="/ManageUsers2" element={< ManageUsers2/>}/>
          <Route path="/edit" element={< EditAccount/>}/>
          <Route path="/delete" element={< DeleteUser/>}/>
          <Route path="/suspend" element={< SuspendUser/>}/>
        </Routes>
    </>
  )
}

export default App
