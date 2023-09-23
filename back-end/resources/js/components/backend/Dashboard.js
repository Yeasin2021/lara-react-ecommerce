import React from 'react';
import Sidebar from './Partial/Sidebar';
import Header from './Partial/Header';
import BreadCumb from './Partial/BreadCumb';
import Content from './Partial/Content';
import { Outlet } from "react-router-dom";


const Dashboard = () => {

  return (
    <div className='d-flex'>
            <Sidebar />
        <div id="right-panel" className="right-panel" style={{ width:'100%' }}>
            <Header />
            <BreadCumb />
            <Content />
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard
