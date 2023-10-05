import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import bag from '../assets/bag.png'


const CartWidget = () => {

  const {cart, totalQuantity, totalCart} = useContext(CartContext)
 




  return (
  <div>
    <Flex>
        <img src={bag} width='25px'/>
        <Box> <p>{totalQuantity}</p> </Box>
        
</Flex>
</div>
  )
}

export default CartWidget