import React, { Component } from 'react';
import {connect} from 'react-redux';
import {register} from '../Action/Register';
import  './Register.css';

class Registercomponent extends Component{
    render(){
        return(
            <div  className="backgrounda">   
            <form>
            <label className="fonts" >REGISTER</label><br/><br/>
            <label className="alignment">Firstname</label><br/>
                    <input className="alignmenta" type='text'/><br/>
            <label className="alignment">Lastname</label><br/>
                    <input className="alignmenta"  type='text'/><br/>
            <label className="alignment">Username</label><br/>
                    <input className="alignmenta" type='text'/><br/>
            <label className="alignment">Password</label><br/>
                    <input className="alignmenta" type='text'/><br/>
            <button onClick={this.props.register}  className="colors">Register</button>
            <a href='/pract1'  className="colora">Cancel</a>  
            </form>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    const{fname}=state.Loginreducer;
    const{lname}=state.Loginreducer;
    const{uname}=state.Loginreducer;
    const{password}=state.Loginreducer;  
    return{fname,lname,uname,password};
};
export default connect(mapStateToProps,{register})(Registercomponent);