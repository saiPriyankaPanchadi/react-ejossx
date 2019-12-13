import React from 'react';
import {Route } from 'react-router-dom';
import Homepage from'./Homepage';
import LoginPage from'./LoginPage';

const Hello = () => <div> 

<Route path= '/' exact component={Homepage}/>
<Route path= '/login' exact component={LoginPage}/>

</div>

export default Hello