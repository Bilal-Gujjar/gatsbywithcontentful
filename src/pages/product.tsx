import React from 'react'
import { Router } from "@reach/router";
import Layout from '../components/layout'
import Product1 from '../components/product1'
import Product2 from '../components/product2'
import FinalTest  from '../components/FinalTest'
import Main from '../components/main'
import { Link } from 'gatsby';




const Product = () => {
    return(
        <Layout>
            <h1>See Products</h1>
            <div>
                <Link to="/product/Shot-click">Product 1 </Link>
                <br/>
                <Link to="/product/Captured">Product 2 </Link>
                <br/>
                <Link to="product/FinalPage">Final Test </Link>
            </div>
            <Router basepath="/product">
                <Product1 path= "/Shot-click"/>
                <Product2 path= "/Captured"/>
                <FinalTest path="FinalPage"/>
                <Main path = "/"/>
            </Router>
        </Layout>
    )
}
export default Product;