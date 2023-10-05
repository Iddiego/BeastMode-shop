import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemCount from './ItemCount'


const Collections = () => {
  
  const [ products, setProducts] = useState([])

  
  
  useEffect (() => {
    const db = getFirestore()
    const itemCollection = collection(db,"Ropa")

    getDocs(itemCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=> ({
          ...doc.data(), id: doc.id
      }))
      setProducts(docs)
    }).catch((error)=>
    console.error("firebase", error))
  },[])


// const handleToCart = (quantity, precio) =>{
//   const totalPrice = quantity * precio
//   console.log("el PUTO precio:", totalPrice)
// }

  return (
    <div>
      <h1>Collections</h1>
      {
        products.map((p)=> 
        <div key={p.nombre}>
          <h4>Producto: {p.nombre}</h4>
          <h5>Categoría: {p.categoria}</h5>
          <h6>Precio: $ {p.precio}</h6>
          <img src={p.imagen} alt="" />
          {/* <ItemCount  onAdd={handleToCart} precio={p.precio}/> */}


        </div>)
      }



    </div>
  )
}

export default Collections

