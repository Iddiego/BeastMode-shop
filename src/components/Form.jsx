import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderID] = useState(null);
  const { cart } = useContext(CartContext);

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "") {
      alert("Campo nombre vacío");
      return;
    }

    if (email === "") {
      alert("Campo email vacío");
      return;
    }

    const order = {
      buyer: {
        nombre,
        email,
      },
      items: cart
    };

    addDoc(ordersCollection, order)
      .then(({ id }) => setOrderID(id))
      .catch((error) => {
        console.error("Error al agregar el documento: ", error);
      });
  };

  return (
    <div className="formulario">
      <div className="contenedor">
      <h1>Datos Del Comprador</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Button type="submit">Enviar</Button>
      </form>
      <div className="compran">
      <h3>Id de tu compra:</h3>
      <h3>{orderId}</h3>
      </div>
      
    </div>
      </div>
  );
};

export default Form;
