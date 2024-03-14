import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './routs/UserRoutes';
import AdminRoutes from './routs/AdminRoutes';

function App() {
  return (
    <>
    <Routes >
      <Route exect path='/*' element={<UserRoutes />} />
      <Route exect path='/admin/*' element={<AdminRoutes />} />
    </Routes>
  </>

      );
}

      export default App;
