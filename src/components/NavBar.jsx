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
          <img src='./src/assets/bearWhite.png' width='50px'/>
        </Link>
      </Box>
  <Spacer />
      <Box p='4' bg='#00FF7F'>
  <Menu>
    <MenuButton className='menu'>
      Menu
    </MenuButton>
    <MenuList className='menud'>
          <MenuItem >
            <Link to={`/categoria/${"Categoría A"}`}>
            Categoria A
            </Link>
          </MenuItem>
          <MenuItem>
          <Link to={`/categoria/${"Categoría B"}`}>
            Categoria B
            </Link>
          </MenuItem>
          <MenuItem>
          <Link to={`/categoria/${"Categoría C"}`}>
            Categoria C
            </Link>
          </MenuItem>
      </MenuList>
  </Menu>
  </Box>
    <Spacer />
      <Box p='4' bg=' #FF3985' color='white'>
        <Link to={"/cart"}>
          <CartWidget/>
        </Link>
      </Box>
</Flex>
   </div>
  )
}

export default NavBar