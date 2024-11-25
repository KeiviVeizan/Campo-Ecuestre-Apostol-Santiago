import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
            <a href="">Historia</a>
          </li>
          <li>
            <a href="">Planes</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <ul className="flex gap-x-2">
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
        </ul>
      </nav>
    </div>
  </header>
  )
}
