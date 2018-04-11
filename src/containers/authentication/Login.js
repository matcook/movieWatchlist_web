import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import './Authentication.css';

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      username : '',
  		password : '',
      errorMsg : ''
    };
  }

	submitLoginForm(){
	  let valid = this.validate();

	  if(valid){
	    //submit form
	    this.setState({errorMsg : ''});
	    console.log("form is valid");
	    this.props.history.push('/dashboard');
	  }
	  else{
	    //ask users to fix errors
	    console.log("form is invalid");
	    console.log(this.state.errorMsg);
	  }
	}

  updateUserDetails(event){
    let inputFieldValue = event.currentTarget.value;
    let inputFieldName = event.currentTarget.name;

    let stateClone = JSON.parse(JSON.stringify(this.state));
    stateClone[inputFieldName] = inputFieldValue;

    this.setState(stateClone);
  }

  validate(){
    let errorMsg = '';

    if(this.state.username.length < 4 || (/\[([^\]]+)]/).test(this.state.username)){
      errorMsg = "Username needs to be at least 4 characters long and not contain special characters like < > [] ()";
    }

    if(this.state.password.length < 4){
      errorMsg = "Password is not long enough";
    }

    if(errorMsg !== ''){
      this.setState({
        errorMsg : errorMsg
      });
    }
    else{
      this.setState({
        errorMsg : ''
      });
    }

    return errorMsg !== '' ? false : true;
  }

  render(){
    return (
    	<div className="register">
        <h1>Login</h1>
        <form>
          <Input 
            name="username" 
            type="text" 
            placeholder="Write your username" 
            label="Username"
            onChange={ (event) => this.updateUserDetails(event) }
            required
          />
          <Input 
            name="password" 
            type="password" 
            placeholder="Choose a password" 
            label="Password"
            onChange={ (event) => this.updateUserDetails(event) }
            required
          />
        </form>
        <Button className="button" waves='light' onClick={ () => this.submitLoginForm() } >Login</Button>
      </div>
    );
  }
}

export default Login;