import React from 'react'
import '../component css/Footer.css'
export const Footer = () => {
  return (
    <>
    <footer>
        <div className='Section-izq'>
            <img src="/public/images/logo.svg" alt="Logo del Campo Ecuestre"/>
            <h3>Campo Ecuestre Apostol Santiagooooo</h3>
        </div>
        <div className='Section-der'>
            <h3>
                Visitanos en nuestras redes sociales
            </h3>
            <div className="icons">
                <a href="https://www.facebook.com/profile.php?id=61560889510956" target='_blank'><img src="/public/images/facebook.svg" alt="Facebook" /></a>
                <a href="https://wa.link/q71ukt" target='_blank'><img src="/public/images/whatsapp.svg" alt="Whatsapp" /></a>

            </div>            
        </div>
    </footer>
    </>
  )
}
