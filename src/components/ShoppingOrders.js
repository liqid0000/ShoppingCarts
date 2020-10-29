import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingOrders = (props) => {
    const { orderTotal, shipping } = props

    const calculateGrandTotal= () =>{
      const grandTotal = (orderTotal > 100) ?
      orderTotal : orderTotal+shipping
      console.log(grandTotal)
      return grandTotal
    }

    const calculateShipping= () =>{
      const newShipping = (orderTotal > 100) ?
      0 : shipping
      return newShipping
    }

    return(       
        <div className="orders">
          <div className="orders__shipping">
            <p>Shipping</p>
            <p>{calculateShipping()}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Cart Totals</th>           
              </tr>             
            </thead>
           <tbody>
            <tr>
              <td>    
                <ul>
                  <div className="orders__list__wrapper">
                    <li>Subtotal</li> 
                    <li>{orderTotal}</li>
                  </div>                                  
                  <hr />
                  <div className="orders__list__wrapper">
                    <li>GrandTotal</li> 
                    <li>{calculateGrandTotal()}</li>
                  </div>
                  <li><Link to={`/success`}><button className="orders__button">Proceed to checkout</button></Link></li>              
                </ul>                                        
              </td>   
              </tr>       
            </tbody> 
          </table>
        </div>        
    )
}

export default ShoppingOrders;