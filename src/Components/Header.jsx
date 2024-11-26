import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../component css/Header.css'
export const Header = () => {
  const [Menu, setMenu] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const MenuNav = () => {
    setMenu(!Menu);
  };
  return (
    <header>
    <div className="header-top">
      <nav>
        <button className="button-menu" onClick={MenuNav}>
          ☰
        </button>
        <ul className={`menu ${Menu ? "menu-open" : ""}`}>
          <li>
            <Link to="/"> 
              Inicio
             </Link>
          </li>
          <li>
            <Link to="/planes">
              Planes
            </Link>
          </li>
          <li>
            <a href="#section2">Servicios</a>
          </li>
          
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Salir
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Ingresar</Link>
                </li>
              </>
            )}
          
        </ul>
      </nav>
    </div>
  </header>
  )
}
