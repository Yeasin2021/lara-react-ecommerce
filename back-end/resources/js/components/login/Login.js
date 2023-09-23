import React, { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
const navigate = useNavigate();
const [input,setInput] = useState({email:'',password:''});
const login = async (e)=>{
    e.preventDefault();
    const res = await axios.post("login",input);
    console.log(res);
    if(res.status === 200){
        localStorage.setItem('access_token',JSON.stringify(input));
        const a = localStorage.getItem('access_token','***');
        console.log(JSON.parse(a));
        navigate("/admin-dashboard");
    }else{
        navigate("/");
        console.log("credential is not match");
    }
  }

  return (
    <div className='bg-dark'>
    <div className="sufee-login d-flex align-content-center flex-wrap">
        <div className="container">
            <div className="login-content">
                <div className="login-logo">
                    <a href="index.html">
                        <img className="align-content" src="backend/images/logo.png" alt="" />
                    </a>
                </div>
                <div className="login-form">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Email"
                             name='email' onChange={(e)=>setInput({...input, [e.target.name] : e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password"
                            name='password' onChange={(e)=>setInput({...input, [e.target.name] : e.target.value})} />
                        </div>
                        <div className="checkbox">
                            <label> <input type="checkbox" /> Remember Me </label>
                            <label className="pull-right">
                                <a href="#">Forgotten Password?</a>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                        <div className="social-login-content">
                            <div className="social-button">
                                <button type="button" className="btn social facebook btn-flat btn-addon mb-3"><i className="ti-facebook"></i>Sign in with facebook</button>
                                <button type="button" className="btn social twitter btn-flat btn-addon mt-2"><i className="ti-twitter"></i>Sign in with twitter</button>
                            </div>
                        </div>
                        <div className="register-link m-t-15 text-center">
                            <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                        </div>
                        <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Login
