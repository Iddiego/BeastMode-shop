import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
      <Flex bg='#00FF7F'>
      <Box p='4' bg='#00FF7F'>
       <Link to={"/"}>
          <h2>BeastMode</h2>
        </Link>
      </Box>
  <Spacer />
      <Box p='4' bg='#00FF7F'>
  <Menu>
    <MenuButton>
      Menu
    </MenuButton>
    <MenuList>
          <MenuItem>
            <Link to={`/categoria/${"A"}`}>
            Categoria A
            </Link>
          </MenuItem>
          <MenuItem>
          <Link to={`/categoria/${"B"}`}>
            Categoria B
            </Link>
          </MenuItem>
          <MenuItem>
          <Link to={`/categoria/${"C"}`}>
            Categoria C
            </Link>
          </MenuItem>
      </MenuList>
  </Menu>
  </Box>
    <Spacer />
      <Box p='4' bg=' #FF3985'>
        <Link to={"/cart"}>
          <CartWidget/>
        </Link>
      </Box>
</Flex>
   </div>
  )
}

export default NavBar