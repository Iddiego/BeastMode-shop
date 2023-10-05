import { useState, createContext, useEffect} from "react"



export const CartContext = createContext({
  cart:[]
})

export const CartProvider = ({ children }) => { 
  const [cart, setCart] = useState([])


  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0)

  const addItem = (item, quantity) => {
    if(!isInCart(item.id)){
      const parsedPrice = parseFloat(item.precio);
        setCart(prev => [...prev, {...item, quantity, precio: parsedPrice}])
    } else {
      setCart((prev) =>
      prev.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + quantity }
          : product ))
    }
  }

  const removeItem = (itemId) => {
    const cartActualizado = cart.filter(prod => prod.id !== itemId)
    setCart(cartActualizado)
  }


  const clearCart = () => {
    setCart([])
  }


  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId)
  }

  


  return (
    <CartContext.Provider value={{cart, addItem, removeItem, isInCart, clearCart, totalQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider