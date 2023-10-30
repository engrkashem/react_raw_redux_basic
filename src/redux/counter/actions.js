import {INCREMENT,DECREMENT} from './actionIdentifiers';

export const increment=(value)=>{
    return{
        type:INCREMENT,
        payload:value
    };
};

export const decrement=(value)=>{
    return{
        type:DECREMENT,
        payload:value
    };
};