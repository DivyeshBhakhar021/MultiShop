import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './routs/UserRoutes';
import AdminRoutes from './routs/AdminRoutes';
import PrivateRoutes from './routs/PrivateRoutes';
import { configestore } from './reduct/Store';
import { Provider } from 'react-redux';

function App() {
  const store = configestore()
  return (
    <>
     <Provider store={store}>
      <Routes >
        <Route exect path='/*' element={<UserRoutes />} />
        <Route element={<PrivateRoutes />}>
          <Route exect path='/admin/*' element={<AdminRoutes />} />
        </Route>  

      </Routes>
      </Provider>
    </> 

  );
}

export default App;
