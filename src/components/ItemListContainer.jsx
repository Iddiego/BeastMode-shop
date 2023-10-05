import { Center, Flex, Spacer } from '@chakra-ui/react'
import ItemList from "./ItemList"
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {
    const {categoria} = useParams()
    const [ productos, setProducts] = useState([])
    console.log(productos)
    
    
    useEffect (() => {
      const db = getFirestore()
    
    
      const itemCollection = collection(db,"Ropa")
      getDocs(itemCollection).then((snapshot)=>{
        const docs = snapshot.docs.map((doc)=> ({
            ...doc.data(), id: doc.id
        }))
        setProducts(docs)
      })
    },[])


const filteredProducts = productos.filter((producto) => producto.categoria === categoria)

return (
  <>
  <div  className='itemList'>
  {categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />}
  </div>
  </>
)
}

export default ItemListContainer