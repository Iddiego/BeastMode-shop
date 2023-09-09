import React from "react";
import {Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading, Flex} from "@chakra-ui/react"
import { Link } from 'react-router-dom'



const Item = ({producto}) => {
  // console.log(producto)


  return (
        <div>
  <Flex flexWrap="wrap" justify="center">
            <Card maxW='sm'>
  <CardBody>
      <Image src={producto.imageUrl} borderRadius='lg'/>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.nombre}</Heading>
      <Text>{producto.descripcion}</Text>
      <Text color='gray' fontSize='2xl'>$ {producto.precio}</Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' bg='#00FF7F' color='white'>
           <Link to={`/item/${producto.id}`}>Detalle</Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Flex>

        </div>
    )




}


export default Item
