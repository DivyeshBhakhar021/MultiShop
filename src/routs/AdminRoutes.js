import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../admin/component/Product/Product';


function AdminRoutes(props) {
    return (
        <div>
            <h1>adminRouts</h1>
            <Routes >
                <Route exect path='/product' element={<Product />} />
            </Routes>
        </div>
    );
}

export default AdminRoutes;