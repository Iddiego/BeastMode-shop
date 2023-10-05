import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])
  const {id} = useParams()

  
  useEffect(()=> {
  const db = getFirestore()
  
  const oneItem = doc(db, "Ropa",`${id}`)
  getDoc (oneItem).then((snapshot) =>{
    if(snapshot.exists()){
      const docs = snapshot.data()
      setProduct(docs)
    }
  })
  },[])
  

  return (

    <>
        <div className='itemDetail'>
        <ItemDetail product={product}/>
        </div>
    </>
  )
}

export default ItemDetailContainer