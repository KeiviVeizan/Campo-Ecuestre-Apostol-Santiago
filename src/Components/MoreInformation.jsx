import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import areasDeportivas from '../assets/areasDeportivas'
const getInfomation = (id)=>{
    const info = areasDeportivas.find((index)=>index.id === Number(id) )
    return info
}
export const MoreInformation = () => {
    const params = useParams () 
    const [moreInformation, setMoreInformation]= useState ()
    useEffect (()=>{
        setMoreInformation (getInfomation(params.id))
    },[])
    console.log (moreInformation)
     
  return (
    <>
    <main>
        <h3>
        {moreInformation?.title}
        </h3>
        <p>
            {moreInformation?.description}
        </p>
    </main>
    </>
    
  )
}
