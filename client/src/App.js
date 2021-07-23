import React, {useState} from 'react';
import { useAuth } from './context/auth';
import AuthenticatedApp from "./authenticated-app"
import UnauthenticatedApp from "./unauthenticated-app"

const App = ()=>{
  const {user} = useAuth();
  return <UnauthenticatedApp />;
}

export default App;
