  import { 
    put, 
    call,   
    takeEvery,      
  }from 'redux-saga/effects'
  import axios from "axios";  
  
  import *as actions from '../store/actions/shoppingStuff'
  import *as actionType from '../store/actionsType/actionsType'  
 
  function* fetchShoppingItems(){  
    try{                     
        const {data} = yield call( 
         axios.get,
         `./items.json`
         );             
         const newData = data.map(item =>{      
         return {...item, ...{qua : 0}}
         })
         console.log('newData')
         console.log(newData)
         yield put(actions.successFetchShoppingItems(newData));  
     }catch(e){                
         yield put(actions.errorFetchShoppingItems());
     }
  }
  
  export default function* (){       
    yield takeEvery(actionType.PERFORM_FETCH_SHOPPING_ITEMS, fetchShoppingItems);      
  } 