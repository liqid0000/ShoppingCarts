import * as actionTypes from '../actionsType/actionsType';
import { quantitiesAdd, calculateOrderTotal, updateItemQua, deleteItem, deleteQuantities } from './utils'

const INITIAL_STATE = {    
    shipping: 23.80,
    quantities: [],
    orderTotal: 0,
    items: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
};



export const reducerShoppingStuff = (state, action) => {  
    if(state === undefined){
        return INITIAL_STATE;
    }
    switch ( action.type ) {
        case actionTypes.PERFORM_FETCH_SHOPPING_ITEMS:
            return{
                ...state,              
               isLoading: true
            }
        case actionTypes.SUCCESS_FETCH_SHOPPING_ITEMS:
            return{
                ...state,              
                isError: false,     
                isSuccess: true,   
                isLoading: false,
                items: action.payload,      
                quantities: quantitiesAdd(action.payload),                           
            }
        case actionTypes.ERROR_FETCH_SHOPPING_ITEMS:
            return{
                ...state,
                isError: true,              
            }
        case actionTypes.ADD_ITEM_QUANTITY:            
            return{
                ...state,
                quantities: updateItemQua(state.quantities , action.payload.id, action.payload.qua),
                orderTotal: calculateOrderTotal(state.quantities)       
            }

        case actionTypes.DELETE_ITEM:            
            return{
                ...state,
                items: deleteItem(action.payload, state.items),
                quantities: deleteQuantities(action.payload, state.quantities),
                orderTotal: calculateOrderTotal(state.quantities)
            }
        case actionTypes.CALCULATE_ORDER:
            return{
                ...state,
                orderTotal: calculateOrderTotal(state.quantities)
            }
        default: 
            return state;
    }
}

export default reducerShoppingStuff


