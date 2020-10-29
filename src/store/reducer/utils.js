export const quantitiesAdd = (items) =>{
    const quantities = [];
    items.forEach(item =>{
        quantities.push({id: item.id, qua: 0, unitPrice: item.unitPrice})
    })
    console.log(quantities)
    return quantities;
}

export const calculateOrderTotal = (quas) => {
    console.log(quas)
    const newQuas = [...quas]
    var total = newQuas.reduce((sum, p) => sum + p.qua*p.unitPrice, 0);
   // const total = newQuas.reduce((a, b) => (a.qua) + (b.qua) );
    console.log(total)
    return total;
}

export const updateItemQua = (quantities, id, qua) =>{ 
    const quantitiess = [...quantities]
    const itemIndex = quantitiess.findIndex(qua => qua.id === id );
    quantitiess[itemIndex].qua = qua   
    return quantitiess;    
}

export const deleteQuantities = (id, quantities) =>{
    let newQuantities = [...quantities]   
    const quantitiIndex = newQuantities.findIndex(qua => qua.id === id ); 
    newQuantities.splice(quantitiIndex, 1) 
    return newQuantities  
}

export const deleteItem = (id, items) =>{  
    let newItem = [...items]   
    const itemIndex = newItem.findIndex(qua => qua.id === id ); 
    newItem.splice(itemIndex, 1) 
    return newItem  
}