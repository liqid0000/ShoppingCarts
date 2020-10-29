import React from 'react';
import { ShoppingItem}  from './ShoppingItem'

const ShoppingItems = (props) => {
  const { items, addItemQuantity, deleteItem } = props;
  console.log(props)
    return(
      <>
          <div className="items">
            {items.map(item => (
              <ShoppingItem 
                key={item.id}
                deleteItem={deleteItem}
                addItemQuantity={addItemQuantity}
                item={item}
              />
            ))}
          </div>
      </>
  )
}

export default ShoppingItems;