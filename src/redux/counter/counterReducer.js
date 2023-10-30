import {INCREMENT,DECREMENT} from './actionIdentifiers';


const initialState={
    value:0
};

const counterReducer=(state=initialState, action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                value:state.value + action.payload
            };

        case DECREMENT:
            return{
                ...initialState,
                value:state.value - action.payload
            }
    
        default:
            return state;
    }
};

export default counterReducer;