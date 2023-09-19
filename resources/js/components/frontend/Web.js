import React from 'react';
import Header from './Header';
import Banner from './Banner';
import FeatureArea from './FeatureArea';
import FeatureProduct from './FeatureProduct';
import Offer from './Offer';
import NewProduct from './NewProduct';
import InspiredProduct from './InspiredProduct';
import Blog from './Blog';
import Footer from './Footer';


const Web = () => {
  return (
    <div>
        <Header/>
        <Banner />
        <FeatureArea />
        <FeatureProduct />
        <Offer />
        <NewProduct />
        <InspiredProduct />
        <Blog />
        <Footer />
    </div>
  )
}

export default Web
