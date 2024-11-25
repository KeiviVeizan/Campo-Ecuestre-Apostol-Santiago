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
              {areasComunes.map((areas) => (
                  <div key={areas.id} className={`info-areas info-areas${areas.id}`}>
                      <div className='Card-Info-areas'>
                        <h3>{areas.title}</h3>
                        <p>{areas.description}</p>
                        <NavLink to={`/areas-comunes/${areas.id}`}>Más información</NavLink>
                      </div>
                      {areas.image && <img src={areas.image} alt="Areas Deportivas" />}
                      
                  </div>
              ))}
      </section>
    </main>
  )
}

export default Section5