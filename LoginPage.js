import React from 'react'
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
submit =(data)=> {
  console.log(data);
}

  render(){
    return (
<div>
<LoginForm submit = {this.submit}/>
</div>
    )
  }
} 


export default LoginPage