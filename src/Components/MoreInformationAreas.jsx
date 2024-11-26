import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moreInformationAreasComunes from '../assets/moreInformationAreasComunes'
import '../component css/MoreInformationAreas.css'
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
        <Header/>
        <div className='intro-a'>
            <img src={moreInformationAreas?.image1} alt="Imagen de las areas deportivas" />
            <h2>
                 {moreInformationAreas?.title}
            </h2>
        </div>
        <main className='info-section-especifict-a'>
            <div className="info-section-areas-a">
                <div className="info-izq-areas-a">
                    <h3>
                        Infraestructura
                    </h3>
                    <br />
                    <p>
                        {moreInformationAreas?.description}
                    </p>
                </div>
                <img src={moreInformationAreas?.image} alt="Imagen de las areas comunes" />
            </div>
            <div>
                <model-viewer
                    src= {moreInformationAreas?.modelo3d}
                    ar
                    camera-controls
                ></model-viewer>
            </div>
        </main>
    </main>
        </>
  )
}
