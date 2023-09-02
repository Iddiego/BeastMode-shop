import React from "react";
import {Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading} from "@chakra-ui/react"


const Item = ({producto}) => {
    console.log ()

    return (
        <div>
            <Card maxW='sm'>
  <CardBody>
    <Image
      src={producto.image}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.title}</Heading>
      <Text>{producto.desciption}</Text>
      <Text color='gray' fontSize='2xl'>
        $ {producto.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' bg='#00FF7F ' color='white'>
            Detalle
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

        </div>
    )




}


export default Item
