import useCounter from './useCounter'

const CounterComponent = () => {
    const {count, increment, decrement, restart} = useCounter (10, 10)




  return (
    <div>
        <h2>Contador:{count}</h2>
        <button onClick={increment}>Sumar</button>
        <button onClick={decrement}>Restar</button>
        <button onClick={restart}>Borrar</button>


    </div>
  )
}

export default CounterComponent