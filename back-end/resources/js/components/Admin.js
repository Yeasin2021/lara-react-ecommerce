import {React,useState,useEffect} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Redirect, Link } from "react-router-dom";
import Protected from './Protected';
import Login from './login/Login';
import Dashboard from './backend/Dashboard';
import Banner from './backend/pages/table/Banner';
import FeatureAreaList from './backend/pages/table/FeatureAreaList';
import FeatureArea from './backend/pages/form/FeatureArea';

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
                    <Route path='/admin-feature' element={<Protected isLogedIn={isLoggedIn}><FeatureAreaList /></Protected>}></Route>
                    <Route path='/admin-feature-form' element={<Protected isLogedIn={isLoggedIn}><FeatureArea /></Protected>}></Route>
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
