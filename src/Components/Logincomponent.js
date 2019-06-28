import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../Action/LoginAction';
import  './Login.css';
import browserhistory  from '../history/browserhistory';
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
       
        if(this.state.Fname.length==0 && this.state.Password.length==0)
        {
        this.setState({nrequired:"user name required",prequired:"password requierd"})
        
        }
        else if(this.state.Fname.length==0)
        {
        this.setState({nrequired:"user name required"})
        return true;
        } 
        
        else if (this.state.Password.length==0)
        {
        this.setState({prequired:"password requierd"})
        return true;
        }
        else
        {
        browserhistory.push("pract3");
        }
        }       
       
    render(){
        return(
            <div className="background"> 
            <form name="forms">
            <label className="font" >Login</label><br/><br/>
            <label className="align" >Username</label><br/>
                    <input className="aligna" type='text' name="Fname" onChange={this.handleChange}/><br/><br/>
                   <p>{this.state.nrequired}</p>
            <label className="align">Password</label><br/>
                    <input className="aligna" type='text'  name="Password" onChange={this.handleChange}/><br/>
                    <p>{this.state.prequired}</p>
                    
            </form>    
            <button onClick={this.handleSubmit} className="colorc">Login</button>
            <a href='/pract2' className="colorb">Register</a>
           
            </div>
        );
    }
}
// const mapStateToProps=(state)=>{
//     const{name}=state.Loginreducer;
//     const{password}=state.Loginreducer;  
   
//     return{name,password};
// };
export default Logincomponent;