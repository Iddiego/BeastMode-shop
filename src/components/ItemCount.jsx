import React from 'react'

const ItemCount = () => {


    const contador = 3
    const onAdd =() => {
            alert(contador)
    }

  return (
    <>
    <div>ItemCount</div>
    <button onClick={onAdd}>Mostrar Cantidad</button> 
  
    </>
  )
}

export default ItemCount
