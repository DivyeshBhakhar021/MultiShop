import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../admin/component/Product/Product';
import Layout from '../admin/component/Layout/Layout';
import Categories from '../admin/component/Categories/Categories';
import Review from '../admin/component/Review/Review';
import Facilities from '../user/container/Facilities/Facilities';
import Productdata from '../user/container/product/Productdata';


function AdminRoutes(props) {
    return (
        <div>
            <h1>adminRouts</h1>
            <Layout>
            <Routes >
                <Route exect path='/product' element={<Product />} />
                <Route exect path='/categories' element={< Categories/>} />
                <Route exect path='/review' element={< Review/>} />
                <Route exect path='/facilities' element={< Facilities/>} />
                <Route exect path='/productdata'element={<Productdata />}/>
            </Routes>
            </Layout>
        </div>
    );
}

export default AdminRoutes;