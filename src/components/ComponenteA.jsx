import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../context/ShoppingCartContext'

const ComponenteA = () => {
    
   const {Cart, setCart, comision} = useContext(CartContext)


  return (
    <div>{comision}</div>
  )
}

export default ComponenteA