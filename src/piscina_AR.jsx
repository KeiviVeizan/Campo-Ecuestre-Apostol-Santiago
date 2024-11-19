import { useState } from "react";
import React from "react";
import "./piscina_AR.css";

function PiscinaAR() {
  const [Menu, setMenu] = useState(false);

  const MenuNav = () => {
    setMenu(!Menu);
  };
  return (
    <>
      <article className="inicio">
        <header>
          <div className="header-top">
            <nav>
              <button className="button-menu" onClick={MenuNav}>
                ☰
              </button>
              <ul className={`menu ${Menu ? "menu-open" : ""}`}>
                <li>
                  <a href="">Historia</a>
                </li>
                <li>
                  <a href="">Planes</a>
                </li>
                <li>
                  <a href="">Servicios</a>
                </li>
                <li>
                  <a href="">Ingresar</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div>
          <h2>Futbol</h2>
          <p>
            En el área de fútbol, ofrecemos dos canchas reglamentarias de césped
            natural, ideales para entrenamientos y torneos. Contamos con
            entrenadores calificados que brindan asesoría y entrenamientos
            personalizados para todas las edades y niveles de experiencia
          </p>
        </div>
      </article>
    </>
  );
}

export default PiscinaAR;
