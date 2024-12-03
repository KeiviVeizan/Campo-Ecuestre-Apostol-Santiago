import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Header} from "../Components/Header"
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
// Registrar componentes necesarios
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const InterestedList = () => {
  const [interested, setInterested] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Obtener los datos desde el backend
    fetch("http://192.168.0.207:4000/api/interested", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setInterested(data);
        processChartData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const processChartData = (data) => {
    const planCounts = data.reduce((acc, curr) => {
      acc[curr.plan] = (acc[curr.plan] || 0) + 1;
      return acc;
    }, {});

    setChartData({
      labels: Object.keys(planCounts),
      datasets: [
        {
          label: "Cantidad de interesados por plan",
          data: Object.values(planCounts),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  };
  const {  logout, user } = useAuth();
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 md:px-10">
      <h1 className="text-2xl font-bold mb-6 text-black text-center">
        Administración
      </h1>

      {/* Contenedor de la tabla */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-6xl">
        <h3 className="text-lg font-medium mb-4 text-black text-center">
          Los interesados son:
        </h3>
        <div className="space-y-4 overflow-x-auto">
          <div className="grid grid-cols-4 gap-6 bg-gray-200 p-4 rounded-t-md font-bold text-black text-center">
            <span>Nombre</span>
            <span>Número</span>
            <span>Email</span>
            <span>Plan</span>
          </div>
          {interested.map((person, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-4 gap-6 bg-white p-4 rounded-md shadow-sm border-b"
            >
              <span className="text-black font-medium">{person.username}</span>
              <a
                href={`https://wa.me/${person.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {person.phone}
              </a>
              <span className="text-black">{person.email}</span>
              <span className="text-black font-medium">{person.plan}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contenedor de la gráfica */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md w-full max-w-6xl flex justify-center items-center">
        <div className="w-full max-w-3xl">
          <h3 className="text-lg font-medium mb-4 text-black text-center">
            Gráfico de Planes
          </h3>
          {chartData.labels && (
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
              style={{
                maxHeight: "500px", // Altura máxima de la gráfica
                margin: "0 auto", // Centrando
              }}
            />
          )}
        </div>
      </div>
      <Link className="text-black" to="/add-user">Agregar usuario</Link>
      <Link onClick={()=>{logout()}}>Salir</Link>
    </div>
    </>
  );
};

export default InterestedList;
