import React from 'react'
import planesDeAccion from '../assets/planesDeAccion'
import '../component css/Planes-Accion.css'
import { Header } from '../Components/Header'
import RegisterPage from './RegisterPage'
import '../component css/MoreInformationAreas.css'
import { Link } from 'react-router-dom'
import { Footer } from '../Components/Footer'
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
      <Link to="/contactanos" class='mb-4 bg-green-800 px-4 rounded-lg text-white hover:scale-125 hover:bg-zinc-600 hover:text-green-400 transition ease-out duration-500'>Contactanos</Link>
      <Footer/>
    </main>
    </>
  )
}

