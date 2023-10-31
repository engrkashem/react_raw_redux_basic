import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';


// create middlewares
const myLogger=(store)=>(next)=>(action)=>{
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcommingState=[action].reduce(rootReducer, store.getState());
    console.log(`upcommingState: ${JSON.stringify(upcommingState)}`);

    // pass action 
    return next(action)
}


// create redux store
const store=createStore(rootReducer, applyMiddleware(myLogger));

export default store;