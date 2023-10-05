import { Box, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const ItemCount = ({onAdd, precio}) => {
  const [contador, setContador] = useState(0)
    
  
  const increment = () => {
    if(contador < 10 ) {
      setContador(contador + 1)
    }
  }

  const decrement = () => {
    if(contador > 0 ) {
        setContador(contador - 1)
    }
    
  }

    return(
      <>
      <div className='agregar'>
        <p>{contador}</p>
        <div className='btnsure'>
        <button className='mas' onClick={increment}>+</button>
        <button className='menos' onClick={decrement}>-</button>
        </div>
        <button  className="addCarrito" onClick={() => onAdd(contador, precio)}>Agregar al carrito</button>

      </div>
      
      
      
      </>
    )
}

export default ItemCount
