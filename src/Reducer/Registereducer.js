import *as ActionTypes from '../Action/types';

const intialState = {
   fname:'',
   lname:'',
   uname:'',
   password:''

    
};
export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.REGISTER:{
            return{...state}
        }
     
        default: 
            return state;
    }
}