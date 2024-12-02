import React from 'react'
import '../component css/PlanDeAcciones.css'
import { Link } from 'react-router-dom'
export const Section3 = () => {
  return (
    <>
    <section className='section3-info'>
        <h3>
        Ser socio del Centro Ecuestre Apóstol Santiago es formar parte de un estilo de vida exclusivo, diseñado para el disfrute y bienestar de toda la familia.
        </h3>
        <Link to="/planes">Planes</Link>
    </section>
    </>
  )
}
