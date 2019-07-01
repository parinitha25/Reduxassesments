import React, { Component } from 'react';
import {register} from '../Action/Register';
import {connect} from 'react-redux';
import  './Register.css';

class Registercomponent extends Component{
  constructor(props){
    super(props);
    this.state={
      Fname:'',
      Lname:'',
      Uname:'',
      Pwd:'',
      frequired:'',
      lrequired:'',
      urequired:'',
      prequired:''        
    }
  }
  handleC=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state);       
  }
  handleS=(e)=>{    
    var password_regulr=/^[@#][A-Za-z0-9]{7,13}$/; 
    if(this.state.Fname.length==0 && this.state.Lname.length==0 && this.state.Uname.length==0 && this.state.Pwd.length==0)
    {
      this.setState({frequired:"Firstname is required",lrequired:"Lastname is requierd", urequired:"Username is requierd", prequired:"Password is requierd"})
    }
    else if(this.state.Fname.length==0)
    {
      this.setState({frequired:"Firstname  is required"})
      return true;
    }      
    else if (this.state.Lname.length==0)
    {
      this.setState({lrequired:"Lastname is requierd"})
      return true;
    }
    else if (this.state.Uname.length==0)
    {
      this.setState({urequired:"Username is requierd"})
      return true;
    }
    else if (this.state.Pwd.length==0)
    {
      this.setState({prequired:"Password is requierd"})
      return true;
    }
    else if(password_regulr.test(this.state.Pwd)==false){
      this.setState({prequired:"Invalid password"});
      return true;
    }
    else
    {
      this.props.register();
    }
  }   
  render(){
    return(
      <div  className="backgrounda">   
        <form name="forms">
          <label className="fontsa"><b>REGISTER</b></label><br/>
          <label className="alignment"><b>Firstname</b></label><br/>
            <input className="alignmenta" type='text' name="Fname"  onChange={this.handleC}/><br/>
            <p>{this.state.frequired}</p>
          <label className="alignment"><b>Lastname</b></label><br/>
            <input className="alignmenta"  type='text' name="Lname"  onChange={this.handleC}/><br/>
            <p>{this.state.lrequired}</p>
          <label className="alignment"><b>Username</b></label><br/>
            <input className="alignmenta" type='text' name="Uname"  onChange={this.handleC}/><br/>
            <p>{this.state.urequired}</p>
          <label className="alignment"><b>Password</b></label><br/>
            <input className="alignmenta" type='text' name="Pwd"  onChange={this.handleC}/><br/>
            <p>{this.state.prequired}</p>  
        </form>
          <button onClick={this.handleS}  className="colorsa">Register</button>
          <a href='/pract1'  className="colord">Cancel</a> 
          <h1>{this.props.message}</h1> 
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  const{Fname}=state.Registereducer;
  const{Lname}=state.Registereducer;
  const{Uname}=state.Registereducer;
  const{Pwd}=state.Registereducer; 
  const{message}=state.Registereducer;  
  return{Fname,Lname,Uname,Pwd,message};
};
export default  connect(mapStateToProps,{register})(Registercomponent);