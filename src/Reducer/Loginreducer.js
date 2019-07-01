import *as ActionTypes from '../Action/types';
import browserhistory from '../history/browserhistory';

const intialState = {
  Fname:'',
  Password:''               
};
export default(state=intialState,action)=>{
  switch(action.type){
    case ActionTypes.LOGIN:{
      browserhistory.push("/pract3");
      return{...state}
    }
    default: 
      return state;
  }
}