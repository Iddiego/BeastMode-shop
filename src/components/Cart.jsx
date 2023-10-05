import { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const Cart = () => {
const { clearCart, totalQuantity, cart } = useContext(CartContext)


if(totalQuantity === 0){
  return(
    <div className='noproducts'>
    <img src='./src/assets/Logo.png'/>
    <h1>No Hay Productos En El Carrito</h1>
    <Link to='/'><Button>Productos</Button></Link>
    </div>
  )
}

const total = cart.reduce((acc, item) => acc + item.product.precio * item.quantity, 0)




return (
   <div className='cart'>
    {cart.map((item) => (
      <div className='cardCart' key={`${item.product.id}-${item.quantity}`}>
        <div>  
        <img  className="imgCarrito" src={item.product.imagen} alt={item.product.nombre}/>
        </div>
        <div className='tarjetatx'>
        <h1>{item.product.nombre}</h1>
        <h2>Precio: US${item.product.precio}</h2>
        <h5>Cantidad: {item.quantity}</h5>
        </div>
      </div>
    ))
    }
  <div className='cartS'>
   <p className='total'>US$:{total}</p>
   <div className='btnCompra'>
   <button className='btnVcarrito' onClick={clearCart}>Vacía Carrito</button>
   <Link to='/Form'><button className='btnCheck'>CheckOut</button></Link>
   </div>
   </div>
  </div>

)
}

export default Cart
