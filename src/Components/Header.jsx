import { useState,useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../component css/Header.css";

export const Header = () => {
  const [Menu, setMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isAuthenticated, logout, user } = useAuth();

  const MenuNav = () => {
    setMenu(!Menu);
  };
  const location=useLocation()
  useEffect(() => {
    if (location.hash && location.state?.fromDifferentPage) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
    <div className="header-top">
      <nav>
        <button className="button-menu" onClick={MenuNav}>
          ☰
        </button>
        <div className={`header-top ${showNavbar ? "show" : "hide"}`}>
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
            {location.pathname !== "/" ? (
             <Link to="/#section2" state={{fromDifferentPage: true}}>Servicios</Link>
            ):(
              <a href="#section2">Servicios</a>
            )}
          </li>
          <li>
            <Link to="/contactanos">Contactanos</Link>
          </li>

            {isAuthenticated ? (
              <>
                <li>
                  {location.pathname!=="/admin" ? (  
                    <Link
                    to="/admin"
                    // onClick={() => {
                      //   logout();
                      // }}
                      >
                    Administracion
                  </Link>
                  ):(
                    <li> Bienvenido {user.username}</li>
                  )
                  }
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
        </div>
      </nav>
    </div>
  </header>

  );
};
