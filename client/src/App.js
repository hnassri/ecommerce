import React from 'react';
import { Suspense } from 'react';

const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))



const App = ()=>{
  const user = true;
  return (
    <Suspense fallback={<div></div>}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default App;
