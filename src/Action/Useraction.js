import *as ActionTypes from './types';

export function Addnewuser(){
  return function(dispatch){
    dispatch({
      type:"Add new user"
    });
  }
}

