import React from 'react'
import areasComunes from '../assets/areasComunes'
import '../component css/Areas-Comunes.css'
import { NavLink } from 'react-router-dom'
import { Header } from './Header'
function Section5() {
  return (
    <main className='section5-areas'>
        <h2>
            Areas Comunes
        </h2>
        <section className='section5-info'>
              {areasComunes.map((areasc) => (
                  <div key={areasc.id} className={`info-areas-comunes info-areas-comunes${areasc.id}`}>
                      <div className='Card-Info-Areas-Comunes'>
                        <h3>{areasc.title}</h3>
                        <p>{areasc.description}</p>
                        <NavLink to={`/areas-comunes/${areasc.id}`}>Más información</NavLink>
                      </div>
                      {areasc.image && <img src={areasc.image} alt="Areas Deportivas" />}
                      
                  </div>
              ))}
      </section>
    </main>
  )
}

export default Section5