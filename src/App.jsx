import { useState } from 'react'
import './component css/Card-info.css'
import extraInformationCard from './assets/extraInformationCard';
function App() {
  const [Menu, setMenu] = useState(false)

  const MenuNav = () =>{
    setMenu(!Menu);
  };
  return (
    <>  
    <main>
      <h2>
        Haste socio del mejor campo ecuestre de la ciudad
      </h2>
      <section className='section-info'>
              {extraInformationCard.map((info) => (
                  <div key={info.id} className={`info info${info.id}`}>
                      <div className='Card-Info'>
                      <h3>{info.title}</h3>
                      <p>{info.description}</p>
                      </div>
                      {info.images && <img src={info.images} alt="Imagen de la empresa" />}
                  </div>
              ))}
      </section>
    </main>  
    </>
  )
}

export default App
