import React,{useState} from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button onClick={()=>{setCount(count+1)}}>+</button>
    <button onClick={()=>{setCount(count-1)}}>-</button>
    <div>{count}</div>
    </>
  )
}