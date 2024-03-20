import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../admin/component/Product/Product';
import Layout from '../admin/component/Layout/Layout';
import Categories from '../admin/component/Categories/Categories';
import Review from '../admin/component/Review/Review';


function AdminRoutes(props) {
    return (
        <div>
            <h1>adminRouts</h1>
            <Layout>
            <Routes >
                <Route exect path='/product' element={<Product />} />
                <Route exect path='/categories' element={< Categories/>} />
                <Route exect path='/review' element={< Review/>} />
            </Routes>
            </Layout>
        </div>
    );
}

export default AdminRoutes;