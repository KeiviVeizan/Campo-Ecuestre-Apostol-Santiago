import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moreInformationAreasComunes from '../assets/moreInformationAreasComunes'
import { Header } from './Header'

const getInfomation = (id)=>{
    const info = moreInformationAreasComunes.find((index)=>index.id === Number(id) )
    return info
}

export const MoreInformationAreas = () => {
  
    const params = useParams () 
    const [moreInformationAreas, setMoreInformationAreas]= useState ()
    useEffect (()=>{
        setMoreInformationAreas (getInfomation(params.id))
    },[])
    console.log (Header)

    return (
        <>
        <main>
            <h1>
                {moreInformationAreas?.title}
            </h1>
        </main>
        <div>
            <h3>
                {moreInformationAreas?.title}
            </h3>
            <h2>
                Hola
            </h2>
        </div>

        </>
  )
}
