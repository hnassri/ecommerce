import './App.css';
import React from 'react';
import { useAuth } from './context/auth';
import AdminPanel from './admin-app';
import UserPanel from './user-app';

const App = ()=>{
  const {user} = useAuth();
  return user ? <AdminPanel /> : <UserPanel />;
}

export default App;