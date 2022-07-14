import React from 'react'
import "./Calcul.css"
import { useState } from "react"

export default function Calcul() {
  const [sum, setSum] = useState("")

  const noll=()=>{
    if(sum==""){
      setSum(sum)
    }else{
      setSum(sum+"0")
    }
  }

  const kopaytirish=()=>{
    let l=sum[sum.length-1]
    if(sum==""||l=="+"||l=="*"||l=="/"||l=="-"||l=="%"){
      setSum(sum)
    }else{
      setSum(sum+"*")
    }
  }

  const bolish=()=>{
    let l=sum[sum.length-1]
    if(sum==""||l=="+"||l=="*"||l=="/"||l=="-"||l=="%"){
    }else{
      setSum(sum+"/")
    }
  }

  const qoshish=()=>{
    let l=sum[sum.length-1]
    if(sum==""||l=="+"||l=="*"||l=="/"||l=="-"||l=="%"){
    }else{
      setSum(sum+"+")
    }
  }

  const ayirish=()=>{
    let l=sum[sum.length-1]
    if(sum==""||l=="+"||l=="*"||l=="/"||l=="-"||l=="%"){
    }else{
      setSum(sum+"-")
    }
  }

  const foyiz=()=>{
    let l=sum[sum.length-1]
    if(sum==""||l=="+"||l=="*"||l=="/"||l=="-"||l=="%"){
    }else{
      setSum(sum+"%")
    }
  }

  const natija=()=>{
    let arr = sum.split("*")
    if(sum.includes("*")){
      setSum(Number(arr[0])*Number(arr[1]))
    }

    let arr1 = sum.split("/")
    if(sum.includes("/")){
      setSum(Number(arr1[0])/Number(arr1[1]))
    }

    let arr2 = sum.split("+")
    if(sum.includes("+")){
      setSum(Number(arr2[0])+Number(arr2[1]))
    }
  
    let arr3 = sum.split("-")
    if(sum.includes("-")){
      setSum(Number(arr3[0])-Number(arr3[1]))
    }

    let arr4 = sum.split("%")
    if(sum.includes("%")){
      setSum(Number(arr4[0])*(Number(arr4[1])/100))
    }

    let arr5 = sum.split("**")
    if(sum.includes("**")){
      setSum(Number(arr5[0])**Number(arr5[1]))
    }
  }

  const del=()=>{
    let sum1 = String(sum)
    setSum(sum1.slice(0, -1)) 
  }

  return (
    <div className='main'>
      <div className='tablo_main shadow mx-auto mt-5 '>
        <div>
          <input className='tablo mb-2' disabled value={sum} placeholder="0"/>
        </div>
        <div className='row'>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum('')
            }}>AC</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-danger  w-100 my-1' onClick={del}>Del</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={foyiz} >%</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={bolish}>/</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+"7")
            }} >7</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1'
            onClick={()=>{
              setSum(sum+"8")
            }} >8</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+"9")
            }} >9</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={kopaytirish}>*</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+"4")
            }} >4</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+"5")
            }} >5</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+"6")
            }} >6</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={ayirish}>-</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+"1")
            }} >1</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+"2")
            }} >2</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+"3")
            }} >3</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={qoshish}>+</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+"**")
            }}>X/2</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={noll} >0</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary  w-100 my-1' onClick={()=>{
              setSum(sum+".")
            }} >,</button>
          </div>
          <div className='col-3'>
            <button onClick={natija} className='btn btn-primary  w-100 my-1'>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}
