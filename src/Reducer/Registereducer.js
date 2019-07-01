import *as ActionTypes from '../Action/types';
import browserhistory from '../history/browserhistory';

const intialState = {
  Fname:'',
  Lname:'',
  Uname:'',
  Pwd:'',
  message:''   
};
export default(state=intialState,action)=>{
  switch(action.type){
    case ActionTypes.REGISTER:{
      browserhistory.push("/pract1");
      return{...state,message:'LOGIN SUCESSFULLY'}
    }    
    default: 
      return state;
  }
}