import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../Action/LoginAction';
import  './Login.css';

class Logincomponent extends Component{
  constructor(props){
    super(props);
    this.state={
      Fname:'',
      Password:'',
      nrequired:'',
      prequired:''     
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});      
  }
  handleSubmit=(e)=>{
    var password_regulr=/^[@#][A-Za-z0-9]{7,13}$/;
      if(this.state.Fname.length==0 && this.state.Password.length==0)
      {
        this.setState({nrequired:"Username is required",prequired:"Password is requierd"})
      }
      else if(this.state.Fname.length==0)
      {
        this.setState({nrequired:"Username is required"})
        return true;
      }       
      else if (this.state.Password.length==0 )
      {
        this.setState({prequired:"Password is requierd"})
        return true;
      } 
      else if(password_regulr.test(this.state.Password)==false){
        this.setState({prequired:"Invalid password"});
        return true;
      }
      else
      {
        this.props.login();
      }
  }              
  render(){
    return(
      <div className="background"> 
        <form>
          <label className="font" ><b>Login</b></label><br/>
          <label className="align"><b>Username</b></label><br/>
            <input className="aligna" type='text' name="Fname" onChange={this.handleChange}/><br/>
            <p>{this.state.nrequired}</p>
          <label className="align"><b>Password</b></label><br/>
            <input className="aligna" type='text'  name="Password" onChange={this.handleChange}/><br/>
            <p>{this.state.prequired}</p>
        </form>          
          <button onClick={this.handleSubmit} className="colorc">Login</button>
          <a href='/pract2' className="colorb">Register</a>          
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  const{Fname}=state.Loginreducer;
  const{Password}=state.Loginreducer;   
  return{Fname,Password};
};
export default connect(mapStateToProps,{login})(Logincomponent);