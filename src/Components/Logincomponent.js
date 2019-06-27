import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../Action/LoginAction';
import  './Login.css';
class Logincomponent extends Component{
    render(){
        return(
            <div className="background"> 
            <form>
            <label className="font" >Login</label><br/><br/>
            <label className="align">Username</label><br/>
                    <input className="aligna" type='text'/><br/><br/>
            <label className="align">Password</label><br/>
                    <input className="aligna" type='text'/>
            <br/>
            if(this.props.name==null){
                document.write('this feild is required')
            }
            <button onClick={this.props.login} className="color">Login</button>
            <a href='/pract2' className="colora">Register</a>  
            <a href='/pract3'>Register</a> 
            </form>    
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    const{name}=state.Loginreducer;
    const{password}=state.Loginreducer;  
    return{name,password};
};
export default connect(mapStateToProps,{login})(Logincomponent);