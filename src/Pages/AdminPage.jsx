import React, { useEffect, useState } from "react";
import {useAuth} from "../context/AuthContext"
const InterestedList = () => {
  const [interested, setInterested] = useState([]);

  useEffect(() => {
    // Obtener los datos desde el backend
    fetch("http://localhost:4000/api/interested")
      .then((response) => response.json())
      .then((data) => setInterested(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-black">Administración</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-xl">
        <h3 className="text-lg font-medium mb-4 text-black">Los interesados son:</h3>
        <div className="space-y-4">
        <div className="grid grid-cols-4 bg-gray-200 p-4 rounded-t-md font-bold text-black">
            <span>Nombre</span>
            <span>Número</span>
            <span>Email</span>
            <span>Plan</span>
          </div>
          {interested.map((person, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 bg-white p-4 rounded-md shadow-sm border-b"
            >
              <span className="text-black font-medium">{person.username}</span> {/* Cambié "name" por "username" */}
              <span className="text-black">{person.phone}</span>
              <span className="text-black">{person.email}</span>
              <span className="text-black font-medium text-blue-600">{person.plan}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestedList;
