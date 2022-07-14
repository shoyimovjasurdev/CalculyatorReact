import React,{useState} from 'react'

export default function Usa(props) {
  const [sum,setSum] = useState(0)
  return (
    
    <div className=' mt-5 ' >
      <input type="number" placeholder={props.plx} onChange={(e)=>{
        setSum(e.target.value)
      }} className='form-control my-3 w-50 mx-auto'/>
      <h3>{props.ply}:{sum*props.son}</h3>
    </div>
  )
}
