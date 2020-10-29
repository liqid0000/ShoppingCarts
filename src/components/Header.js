import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

    return(
        <header className="header">
            <div className="header__wrapper__logo">
            <h2 className="header__logo">Shopping Cart</h2>
            </div>            
            <div className="header__wrapper__button">
                <div className="header__box__button">
                <Link to={`/success`}><button className="header__button">Proceed to checkout</button></Link>
                </div>                
            </div>           
        </header>
    )
}

export default Header