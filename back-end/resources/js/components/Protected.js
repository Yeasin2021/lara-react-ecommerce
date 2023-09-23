

import { React, useState } from 'react';
import {  Navigate, useHistory } from 'react-router-dom';

const Protected = ({isLogedIn,children}) => {

    const loginData = localStorage.getItem('access_token');
    console.log('Login Data'+ ' = '+JSON.parse(loginData));
    console.log('isLogIn = ' + isLogedIn);
    if(!isLogedIn && !loginData){
        return <Navigate to='/' replace />
    }
    return children;
}

export default Protected

