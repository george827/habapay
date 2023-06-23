
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/session/Home';
import Login from './components/session/Login';
import Signin from './components/session/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import ManageUsers from './components/ManageUsers';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={< Dashboard />}/>
          <Route path="/manageusers" element={< ManageUsers/>}/>
        </Routes>
    </>
  )
}

export default App
