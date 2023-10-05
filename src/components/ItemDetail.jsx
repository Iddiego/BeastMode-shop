import React, { useContext, useState, useEffect } from "react";
import {Card, Text, CardBody, Button, CardFooter, Heading, CardHeader, Center, Image} from "@chakra-ui/react"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";


const ItemDetail = ({product}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const {addItem} = useContext(CartContext)
  const total = quantityAdded * product.precio
  const [loading, setLoading] = useState(true)


  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      product,
      imagen: product.imagen
    }

    addItem(item,quantity)
  }

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
 

    return (
        <div className="itemList">
          <Center p='1rem'>
                    {loading ? ( <Loader/>
                    ) : (
                    <div className="detalle">
                      <img src={product.imagen}/>
                      <div className="arriba">
                      <div className="detalleText">  
                      <h1>{product.nombre}</h1>
                      <h5>{product.descripcion}</h5>
                      <h5>US${product.precio}</h5>
                      <h3>US$ {total}</h3>
                      </div>
                    <div>
                      
                      { 
                        quantityAdded > 0 ? (
                          <Link to='/cart'><button className="conta" ><h1>Terminar Compra</h1></button></Link>
                          ) : ( 
                            <ItemCount initial={1} onAdd={handleOnAdd} />
                            ) 
                          }
                          </div>
                          </div>
                          </div>
                    )}
            </Center>
        </div>
    )

}

export default React.memo(ItemDetail);
