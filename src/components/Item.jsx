import React from "react";
import {Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading, Flex} from "@chakra-ui/react"
import { Link } from 'react-router-dom'



const Item = ({producto}) => {
  // console.log(producto)


  return (
        <div className="cardItem">
    <div className="conImg">   
      <img className="imgUrl" src={producto.imagen}/>
    <div className="text">
      <h1>{producto.nombre}</h1>
      <h5>{producto.categoria}</h5>
      <h5>{producto.descripcion}</h5>
      <h2 color='gray' fontSize='2xl'>US${producto.precio}</h2>
    </div>
    </div> 
  <div className="footerCard">
      <button bg='#00FF7F'>
           <Link to={`/item/${producto.id}`}>Detalle</Link>
      </button>
  </div>


        </div>
    )




}


export default Item
