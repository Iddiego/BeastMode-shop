import { Center, Flex, Spacer } from '@chakra-ui/react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const { categoria } = useParams()
   

    const productos = [
        {id: 1 , nombre: "Producto A", descripcion: "Descripción De Producto A", stock: 20, categoria: "A", precio: 3000, imageUrl:'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'},
        {id: 2 , nombre: "Producto B", descripcion: "Descripción De Producto B", stock: 2, categoria: "B",precio: 2600, imageUrl:'https://images.unsplash.com/photo-1584863495140-a320b13a11a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1946&q=80'},
        {id: 3 , nombre: "Producto C", descripcion: "Descripción De Producto C", stock: 30, categoria: "C",precio: 4500, imageUrl:'https://images.unsplash.com/photo-1605300287659-9ca1a156d7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'},
        {id: 4 , nombre: "Producto D", descripcion: "Descripción De Producto D", stock: 5, categoria: "B",precio: 6500, imageUrl:'https://images.unsplash.com/photo-1618355281346-66ac1663917d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'},
        {id: 5 , nombre: "Producto E", descripcion: "Descripción De Producto E", stock: 40, categoria: "A",precio: 2100, imageUrl:'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1900&q=80'}
    ]
  
  const getProductos = new Promise((resolve, reject ) => {
      if(productos.length > 0){
          setTimeout(() => {
              resolve(productos)
          },2000)
      } else{
          reject(new Error("No hay datos"))
      }
  })

  getProductos
  .then((res) => {
  })
  .catch((error) =>
  console.log(error))

const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
return (
  <>
  <Flex justifyContent='Center' bg='#383838'>
  {categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />}
  </Flex>
  </>
)
}

export default ItemListContainer