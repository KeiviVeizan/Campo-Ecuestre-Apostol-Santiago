import { useState } from 'react'
import './App.css'
function App() {
  const [Menu, setMenu] = useState(false)

  const MenuNav = () =>{
    setMenu(!Menu);
  };
  return (
    <>
    <article className='inicio'>
      <header>
          <div className='header-top'>
            <nav>
              <button className='button-menu' onClick={MenuNav}>
                  ☰
              </button>
              <ul className={`menu ${Menu ? 'menu-open' : ''}`}>
                <li><a href="">Historia</a></li>
                <li><a href="">Planes</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Ingresar</a></li>
              </ul>
            </nav>
          </div>
        </header>
          <div className='header-bottom'>
            <h1>
              Centro Ecuestre Apóstol Santiago S.A.
            </h1>
            <p>
              Entrena, diviértete y vive experiencias inolvidables en nuestro campo ecuestre.
            </p>
          </div>
    </article>    
    </>
  )
}

export default App
