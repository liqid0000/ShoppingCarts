import * as shoppingOrders from '../actionsType/actionsType'

export const performFetchShoppingItems= () =>{
    return{
        type: shoppingOrders.PERFORM_FETCH_SHOPPING_ITEMS        
    }
}

export const successFetchShoppingItems = (payload) =>{
    return{
        type: shoppingOrders.SUCCESS_FETCH_SHOPPING_ITEMS,       
        payload
    }
}

export const errorFetchShoppingItems = () =>{
    return{
        type: shoppingOrders.ERROR_FETCH_SHOPPING_ITEMS 
    }
}

export const addItemQuantity = (payload) =>{
    return{
        type: shoppingOrders.ADD_ITEM_QUANTITY,
        payload
    }
}
export const deleteItem = (payload) =>{
    return{
        type: shoppingOrders.DELETE_ITEM,
        payload
    }
}
export const calculateOrder = () => {
    return{
        type: shoppingOrders.CALCULATE_ORDER,
    }
}

