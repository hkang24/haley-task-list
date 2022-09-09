import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase/firebase';


import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';


import TasksPage from './components/tasks/TasksPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import RequireAuth from './components/common/RequireAuth';
import Spinner from './components/common/Spinner';

import Navbar from './components/common/Navbar';

export default function App() {

  const [user, setUser] = useState(null);
  const [isUserSet, setisUserSet] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) =>{
      setUser(user);
      setisUserSet(true);
    });
    return () => unsub();
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      {
        isUserSet ?
          <Routes>
          <Route path="/" element={
            <RequireAuth user={user}>
              <TasksPage/>
            </RequireAuth>
          } />
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        :
        <Spinner variant='success' className=''/>
      }
    </BrowserRouter>
  );
}