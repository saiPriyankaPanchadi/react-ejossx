import React from 'react'
import LoginForm from './LoginForm'

class Register extends React.Component {
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


export default Register