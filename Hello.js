import React from 'react';
import {Route } from 'react-router-dom';
import Homepage from'./Homepage';
import LoginPage from'./LoginPage';
import Register from'./Register';


const Hello = () => <div className ='ui container'> 

<Route path= '/' exact component={Homepage}/>
<Route path= '/login' exact component={LoginPage}/>
<Route path= '/register' exact component={Register}/>
</div>

export default Hello