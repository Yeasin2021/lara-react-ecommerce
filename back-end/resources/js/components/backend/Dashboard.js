import React from 'react';
import Sidebar from './Partial/Sidebar';
import Header from './Partial/Header';
import BreadCumb from './Partial/BreadCumb';
import Content from './Partial/Content';


const Dashboard = () => {

  return (
    <div className='d-flex'>
            <Sidebar />
        <div id="right-panel" className="right-panel">
            <Header />
            <BreadCumb />
            <Content />
        </div>
    </div>
  )
}

export default Dashboard
