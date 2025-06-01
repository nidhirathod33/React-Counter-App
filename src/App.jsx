import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setcount]=useState(0);
  const Addvalue = () =>
  {
  setcount(counter+1)
   }
  const RemoveValue = () =>
  {
    if (counter>0)
    { 
   counter=
   setcount(counter-1)}
  
   }
  return (
    <>
      <div className='app_container'>
        <div className='counter_card'>
          <h1 className='title'>Counter App</h1>
          <div className='count'>{counter}</div> 
        <div className='button'>
          <button onClick={Addvalue} className='add_btn'>Add</button>
           <button onClick={RemoveValue} className='remove_btn'>Remove</button>

        </div>

        </div>
      </div>

    </>
  )
}

export default App
