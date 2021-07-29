import './App.css';
import React, { useState } from 'react';
import { useAuth } from './context/auth';
import AdminPanel from './admin-app';
import UserPanel from './user-app';

const App = ()=>{
  const { user } = useAuth();
  const [isPanelAdmin, setIsPanelAdmin] = useState(false);
  const panelAdmin = (bool) => {
    setIsPanelAdmin(bool);
  }
  return isPanelAdmin && user ? <AdminPanel /> : <UserPanel panelAdmin={panelAdmin}/>;
}

export default App;