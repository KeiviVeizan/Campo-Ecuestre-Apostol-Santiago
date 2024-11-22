import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moreInformationAreasDeportivas from '../assets/moreInformationAreasDeportivas'
import { Header } from './Header'
import '../component css/MoreInformation.css'
const getInfomation = (id)=>{
    const info = moreInformationAreasDeportivas.find((index)=>index.id === Number(id) )
    return info
}
export const MoreInformation = () => {
    const params = useParams () 
    const [moreInformation, setMoreInformation]= useState ()
    useEffect (()=>{
        setMoreInformation (getInfomation(params.id))
    },[])
    console.log (Header)

  return (
    <>
    <main>
        <Header/>
        <div className='intro'>
            <img src={moreInformation?.image1} alt="" />
            <h2>
                AREA {moreInformation?.title}
            </h2>
        </div>
        <main className='info-section-especifict'>
            <div className="info-section-areas">
                <div className="info-izq-areas">
                    <h3>
                        Infraestructura
                    </h3>
                    <br />
                    <p>
                        {moreInformation?.description}
                    </p>
                </div>
                <img src={moreInformation?.image} alt="Imagen de las areas deportivas" />
            </div>
            <div>
                <model-viewer
                    src= {moreInformation?.modelo3d}
                    ar
                    camera-controls
                ></model-viewer>
            </div>
        </main>
    </main>
    </>
    
  )
}
