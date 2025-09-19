import React, { useState } from 'react'

function UseStateHook() {

  const [cart , setCart] = useState(0)
  const [name , setName] = useState("farhan")

  function Increament(){
    setCart(cart + 1)
  }

  function Descreament(){
    setCart(cart - 1)
  }

  function changeName(){
    setName("Ayan")
  }

  return (
    <>
    <span> {name} </span>
    <button onClick={changeName}>CHANGE MY NAME</button>
    <br /><br />
    <hr />
    <button onClick={Increament}>Increase</button>
    <span className='fs-2'> { cart } </span>
    <button onClick={Descreament}>Decrease</button>
    </>
  )
}

export default UseStateHook