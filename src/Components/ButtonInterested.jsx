import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link correctamente

function ButtonInterested() {
  return (
    <button>
      <Link to="/RegisterPage"> {/* Elimina .jsx del `to`, solo usa el path */}
        Contacto
      </Link>
    </button>
  );
}

export default ButtonInterested;
