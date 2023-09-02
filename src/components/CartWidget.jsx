import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
  <div>
    <Flex>
        <Box>
    <span className="material-symbols-outlined">
        shopping_cart
    </span>
</Box>
<Box>
<p>999</p>
</Box>
</Flex>
</div>
  )
}

export default CartWidget