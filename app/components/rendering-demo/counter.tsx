"use client" 
import { useState } from "react"
import { connection } from "next/server"

export default function Counter()
{
    const [count, setCount] = useState(0)

    const addCount = async ()=>{
        setCount(count+1)
        // const data = await fetch('http://127.0.0.1:5000/api/status')
        // console.log(data)
    }
    return (
    <div className="bg-blue-400 flex justify-center">
        <p>counter {count}</p>
        <button className="bg-black rounded-2xl text-white" onClick={()=>addCount()}> Click to add</button>
    </div>    )
}