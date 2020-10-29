import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import ShoppingItems from '../components/ShoppingItems'
import ShoppingOrders from '../components/ShoppingOrders'
import Header from '../components/Header'
import * as actionCreator from '../store/actions/shoppingStuff'

export const ShoppingStuff = (props) => {
    const {
         isError, isLoading, items,
         performFetchShoppingItems, addItemQuantity,
         orderTotal, shipping, deleteItem,
        } = props

    useEffect(()=>{
        performFetchShoppingItems()
    },[])

    return(
        <>                      
            <div className="container">
            <Header />
            <ShoppingItems
                addItemQuantity={addItemQuantity}
                items={items}
                deleteItem={deleteItem} />
            <ShoppingOrders 
                orderTotal={orderTotal}
                shipping={shipping}
            />
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        performFetchShoppingItems: () => { dispatch(actionCreator.performFetchShoppingItems()) },
        addItemQuantity: (id, qua) => { dispatch(actionCreator.addItemQuantity({id,qua})) },
        deleteItem: (id) => { 
            dispatch(actionCreator.deleteItem(id))
            dispatch(actionCreator.calculateOrder())
        }
    }
};
const mapStateToProps = ({shoppingStuff}) => ({   
    isSuccess: shoppingStuff.isSuccess,
    isLoading: shoppingStuff.isLoading,   
    isError: shoppingStuff.isError,   
    items: shoppingStuff.items,   
    orderTotal: shoppingStuff.orderTotal,
    shipping: shoppingStuff.shipping,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingStuff);
