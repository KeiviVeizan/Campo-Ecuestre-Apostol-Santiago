import React from 'react'
import planesDeAccion from '../assets/planesDeAccion'
import '../component css/Planes-Accion.css'
import { Header } from '../Components/Header'
import '../component css/MoreInformationAreas.css'
import ButtonInterested from '../Components/ButtonInterested'

export const PlanesPage = () => {
  return (
    <>
    <Header/>
    <main className='section-planes'>
        <h2>
            Nuestros Planes de Acción
        </h2>

        <section className='section-planes1'>
              {planesDeAccion.map((planes) => (
                  <div key={planes.id} className={`info-planes info-planes${planes.id}`}>
                    <h3>{planes.title}</h3>
                    {planes.image && <img src={planes.image} alt="Planes de Acción" />}
                      <div className='Card-Info-planes'>
                        <ul>
                          {
                            planes.list?.map((lista)=>(
                              <li>{lista}</li>
                            ))
                          }
                        </ul>
                      </div>
                  </div>
              ))}
      </section>
      <h2 className='mb-7'>Formulario de Solicitud de admision</h2>
      <ButtonInterested/>
    </main>
    </>
  )
}

