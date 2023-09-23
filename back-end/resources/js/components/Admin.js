import {React,useState,useEffect} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Redirect, Link } from "react-router-dom";
import Protected from './Protected';
import Login from './login/Login';
import Dashboard from './backend/Dashboard';

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
