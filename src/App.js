import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './routs/UserRoutes';
import AdminRoutes from './routs/AdminRoutes';
import PrivateRoutes from './routs/PrivateRoutes';
import { configestore } from './reduct/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const {store, persistor} = configestore()
  return (
    <>
     <ThemeProvider>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <Routes >
        <Route exect path='/*' element={<UserRoutes />} />
        <Route element={<PrivateRoutes />}>
          <Route exect path='/admin/*' element={<AdminRoutes />} />
        </Route> 
      </Routes>
      </PersistGate>
      </Provider>
      </ThemeProvider>
    </> 

  );
}

export default App;
