import React from 'react';

import { Form, Button} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from './InlineError';


class LoginForm extends React.Component {
constructor(){
  super();
  this.state={
    data :{
      email:'',
      password:''
    },
    loading:false,
    errors:{}
  }
}

handlechange=(e)=>{
this.setState({
  data: {...this.state.data,[e.target.name]:e.target.value}
})
}
submitHandler=()=>{
  const errors= this.validate(this.state.data);
  this.setState({errors });

}
validate=(data)=>{
  const errors={};
if(!Validator.isEmail(data.email))errors.email ="invalid email";
  if(!data.password)errors.password="can't be blank";
    return errors;
  }


render() {
  const {data,errors} =this.state;
  return(
    <div>
    LoginForm
   <form onSubmit={this.submitHandler}>
   <label htmlFor= 'email' >Email</label>
  <input type='email' id='email' name='email' placeholder='example@ex.com'value ={data.email} onChange={this.handlechange}/>
  {errors.email && <InlineError text={errors.email}/> }
  <label htmlFor= 'password' >Password</label>
  <input type='password' id='password' name='password' placeholder='password'value ={data.password} onChange={this.handlechange}/>
  {errors.password && <InlineError text={errors.password}/> }
   <button primary="true">Login</button>
   </form>
    </div>
  )
}
}
export default LoginForm