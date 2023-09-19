import React from 'react';
import Header from './Header';
import Banner from './Banner';
import FeatureArea from './FeatureArea';
import FeatureProduct from './FeatureProduct';
import Offer from './Offer';
import NewProduct from './NewProduct';
import InspiredProduct from './InspiredProduct';
import Blog from './Blog';


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
    </div>
  )
}

export default Web
