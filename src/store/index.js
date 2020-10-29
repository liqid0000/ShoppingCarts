import reducerShoppingStuff from './reducer/shoppingStuff';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    shoppingStuff: reducerShoppingStuff,   
});

