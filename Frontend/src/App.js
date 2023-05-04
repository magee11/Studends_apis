import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Dashboard
import Layout from "./Layout/layout";
import Login from './Layout/login';
import Register from './Layout/register';
import Calender from "./components/calender"
import StudLayout from "./Layout/studLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/AdminDashboard' element={<Layout />} />
        <Route path='/StudentDashboard' element={<StudLayout />} />
        <Route path='/calender' element={< Calender />} />
      </Routes>
    </Router>
  );
}

export default App;
