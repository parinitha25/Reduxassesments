import *as ActionTypes from '../Action/types';

const intialState = {
   name:'',
   password:''

    
};
export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.LOGIN:{
            return{...state}
        }
     
        default: 
            return state;
    }
}