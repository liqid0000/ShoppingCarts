import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions/shoppingStuff'

export const ShoppingItem = (props) => {  
    const { id, img, unitPrice, name } = props.item;   

    const [qua, setQua] = useState(0);

    const addQua = () =>{
      setQua(qua + 1)        
    }

    const minusQua = () =>{
      if(qua > 0){
        setQua(qua - 1)    
       }            
    }

    return(       
        <>            
            <table>
                <thead>
                <tr>
                    <th></th>   
                    <th></th> 
                    <th>Product Name</th>   
                    <th>Unit Price</th>    
                    <th>Qty</th>  
                </tr>                               
                </thead>           
                <tbody>
                <tr>
                    <td></td>
                    <td><button className="item__button__remove" onClick={e => props.deleteItem(id)}><img alt="x" src="x-img.png"></img></button></td>   
                    <td><img alt="headphones" src={img}></img></td>   
                    <td>{name}</td>     
                    <td>{unitPrice}</td>   
                    <td>                        
                        <button onClick={() => minusQua()}>-</button>
                        <input type="number" readOnly value={qua}></input>
                        <button onClick={() => addQua()}>+</button>
                        <img alt="edit" src="edit-img.png"></img>                                                           
                    </td>      
                </tr>
                </tbody>            
            </table>
            <div className="items__button__wrapper">
                <button className="items__button" onClick={ e => props.addItemQuantity(id, qua)}>Update Shopping Cart</button>
            </div>            
        </>
    )
}

