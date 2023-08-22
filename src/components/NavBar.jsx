import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <div>
      <Flex bg='#00FF7F'>
  <Box p='4' bg='#00FF7F'>
      <h2>BeastMode</h2>
  </Box>
  <Spacer />
  <Box p='4' bg='#00FF7F'>
  <Menu>
    <MenuButton>
      Menu
    </MenuButton>
    <MenuList>
      <MenuItem>Categoria A</MenuItem>
      <MenuItem>Categoria B</MenuItem>
      <MenuItem>Categoria C</MenuItem>
    </MenuList>
  </Menu>
  </Box>
  <Spacer />
  <Box p='4' bg=' #FF3985'>
  <CartWidget/>
  </Box>
</Flex>
   </div>
  )
}

export default NavBar