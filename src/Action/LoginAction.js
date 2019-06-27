import *as ActionTypes from './types';
import browserhistory  from '../history/browserhistory';

export function login(){
    return function(dispatch){
        browserhistory.push("/pract2");
        dispatch({
            type:"Login"
           
        });
    }
}
