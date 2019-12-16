import React from 'react'
import {Link} from 'react-router-dom';
import {Register} from 'react-router-dom'
import Home from './Home.css';

const Homepage = () => <div className='Home'>Homepage
<div><Link to="/login" >Login </Link></div>
<div><Link to="/register" >Register </Link></div>
</div>

export default Homepage