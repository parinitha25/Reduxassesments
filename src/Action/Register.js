import *as ActionTypes from './types';

export function register(){
    return function(dispatch){
        dispatch({
            type:"Register"
        });
    }
}