import React from 'react'
import areasDeportivas from '../assets/areasDeportivas'
import '../component css/Areas-Comunes.css'
import { NavLink } from 'react-router-dom'
function Section2() {
  return (
    <main className='section2-areas'>
        <h2>
            Areas Deportivas
        </h2>
        <section className='section2-info'>
              {areasDeportivas.map((areas) => (
                  <div key={areas.id} className={`info-areas info-areas${areas.id}`}>
                      <div className='Card-Info-areas'>
                        <h3>{areas.title}</h3>
                        <p>{areas.description}</p>
                        <NavLink to={`/areas-deportivas/${areas.id}`}>Más información</NavLink>
                      </div>
                      {areas.image && <img src={areas.image} alt="Areas Deportivas" />}
                      
                  </div>
              ))}
      </section>
    </main>
  )
}

export default Section2