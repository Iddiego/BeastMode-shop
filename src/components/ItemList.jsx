import { useEffect, useState } from 'react';
import Item from './Item'
import Loader from './Loader';


const ItemList = ({ productos }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
 
        const timer = setTimeout(() => {
          setLoading(false);
        }, 5000)
        
        return () => clearTimeout(timer)
      }, [])
     



    
    
    return (
        <div className='itemCent'>
        {loading ? ( 
          <Loader />
        ) : (
          productos.map((p) => {
            return <Item producto={p} key={p.id} />
          })
        )}
      </div>
    )
  }

export default ItemList 