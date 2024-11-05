import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='header-top'>
          <nav>
            <ul>
              <li><a href="">Nuestros Planes</a></li>
              <li><a href="">Acerca de Nosotros</a></li>
              <li><a href="">Inicio</a></li>
            </ul>
          </nav>
        </div>
        <div className='header-bottom'>
          <h1>
            Centro Ecuestre Apóstol Santiago S.A.
          </h1>
          <p>
            Entrena, diviértete y vive experiencias inolvidables en nuestro campo ecuestre.
          </p>
        </div>
      </header>
    </>
  )
}

export default App
