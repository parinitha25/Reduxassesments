import *as ActionTypes from './types';


export function login(){
    return function(dispatch){
       
        dispatch({
            type:"Login"
           
        });
    }
}

