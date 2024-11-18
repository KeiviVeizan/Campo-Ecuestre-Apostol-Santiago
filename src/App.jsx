import { useState } from 'react'
import Section1 from './Components/Section1.jsx';
import Section2 from './Components/Section2.jsx';
function App() {
  const [Menu, setMenu] = useState(false)

  const MenuNav = () =>{
    setMenu(!Menu);
  };
  return (
    <>    
    <Section1/>
    <Section2/>
    </>
  )
}

export default App
