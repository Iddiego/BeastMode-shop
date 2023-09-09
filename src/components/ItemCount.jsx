import { Box, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
  const [contador, setContador] = useState(0)
    return(
      <>
      <Stack direction={['column', 'row']} spacing='24px'>
        <Box w='40px' h='40px'>
          <Button size='xs'  bg='#FF3985' onClick={() => setContador(contador - 1)}>
            -
          </Button>
        </Box>
        <Box w='40px' h='40px'>
          <Button size='xs' bg='#FF3985' onClick={() => setContador(contador + 1)}>
            +
          </Button>
        </Box>
        <Box w='40px' h='40px'>
          <p>{contador}</p>
        </Box>
      </Stack>
      
      
      
      </>
    )
}

export default ItemCount
