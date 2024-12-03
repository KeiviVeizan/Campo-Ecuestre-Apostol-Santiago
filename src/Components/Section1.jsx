import React from 'react'
import '../component css/Card-info.css'
import extraInformationCard from '../assets/extraInformationCard'
function Section1() {
  return (
    <main className='main-info'>
      <h2>
        Haste socio del mejor campo ecuestre de la ciudad
      </h2>
      <section className='section-info'>
              {extraInformationCard.map((info) => (
                  <div key={info.id} className={`info info${info.id}`}>
                      <div className='Card-Info'>
                      <h3>{info.title}</h3>
                      <p>{info.description}</p>
                      <ul>
                          {
                            info.lista?.map((lista)=>(
                              <li>{lista}</li>
                            ))
                          }
                        </ul>
                      </div>
                      {info.images && <img src={info.images} alt="Imagen de la empresa" />}
                  </div>
              ))}
      </section>
    </main>
  )
}

export default Section1