import {React,useState,useEffect} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Redirect, Link } from "react-router-dom";
import Protected from './Protected';
import Login from './login/Login';
import Dashboard from './backend/Dashboard';
import Banner from './backend/pages/table/Banner';
import FeatureAreaList from './backend/pages/table/FeatureAreaList';
import FeatureArea from './backend/pages/form/FeatureArea';
import FeatureAreaEdit from './backend/pages/form/FeatureAreaEdit';
import BannerEdit from './backend/pages/form/BannerEdit';
import CategoryForm from './backend/pages/form/CategoryForm';
import Category from './backend/pages/table/Category';
import CategoryEdit from './backend/pages/form/CategoryEdit';
import Brand from './backend/pages/table/Brand';
import BrandForm from './backend/pages/form/BrandForm';
import BrandEdit from './backend/pages/form/BrandEdit';

const Admin = () => {
const [isLoggedIn, setIsLoggedIn] = useState(true);
useEffect(() => {
        axios.get('${path}/${paths}')
          .then(response => {
            setIsLoggedIn(response.data.isLoggedIn);
            console.log(isLoggedIn)
          })
          .catch(error => {
            console.error(error);
          });
}, []);
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route element={<Dashboard />}>
                    <Route path='/admin-dashboard' element={<Protected isLogedIn={isLoggedIn}><Dashboard /></Protected>}></Route>
                    <Route path='/admin-banner' element={<Protected isLogedIn={isLoggedIn}><Banner /></Protected>}></Route>
                    <Route path='/admin-banner-edit/:id' element={<Protected isLogedIn={isLoggedIn}><BannerEdit /></Protected>}></Route>
                    <Route path='/admin-feature' element={<Protected isLogedIn={isLoggedIn}><FeatureAreaList /></Protected>}></Route>
                    <Route path='/admin-feature-form' element={<Protected isLogedIn={isLoggedIn}><FeatureArea /></Protected>}></Route>
                    <Route path='/admin-feature-edit/:id' element={<Protected isLogedIn={isLoggedIn}><FeatureAreaEdit /></Protected>}></Route>
                    <Route path='/admin-category' element={<Protected isLogedIn={isLoggedIn}><Category /></Protected>}></Route>
                    <Route path='/admin-category-form' element={<Protected isLogedIn={isLoggedIn}><CategoryForm /></Protected>}></Route>
                    <Route path='/admin-category-edit/:id' element={<Protected isLogedIn={isLoggedIn}><CategoryEdit /></Protected>}></Route>
                    <Route path='/admin-brand' element={<Protected isLogedIn={isLoggedIn}><Brand /></Protected>}></Route>
                    <Route path='/admin-brand-form' element={<Protected isLogedIn={isLoggedIn}><BrandForm /></Protected>}></Route>
                    <Route path='/admin-brand-edit/:id' element={<Protected isLogedIn={isLoggedIn}><BrandEdit /></Protected>}></Route>
                </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Admin

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
