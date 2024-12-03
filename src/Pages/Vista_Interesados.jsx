import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Vista_Interesados() {
  const { logout } = useAuth();
  return (
    <div className="flex flex-col bg-zinc-800  h-screen items-center ">
      <h1 className="text-2xl font-bold text-center mb-4">
        Lista de Interesados
      </h1>
      <table className="border border-slate-300 border-collapse w-11/12">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td className="border-slate-300 border">prueba</td>
            <td className="border-slate-300 border">123</td>
            <td className="border-slate-300 border">123</td>
          </tr>
        </tbody>
      </table>
      <Link
        className="bg-blue-500 rounded px-1"
        to="/"
        onClick={() => {
          logout;
        }}
      >
        <button>salir</button>
      </Link>
    </div>
  );
}

export default Vista_Interesados;
