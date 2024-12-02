import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";
import { useState } from "react";

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Para limpiar el formulario
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Datos enviados:", data);
      reset(); 
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-10 p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">Hable Con Nosotros</h1>

        <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow">
          {/* Nombre */}
          <input
            type="text"
            {...register("username", { required: "Por favor, ingrese su nombre" })}
            className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4"
            placeholder="Nombre"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

          {/* Email */}
          <input
            type="email"
            {...register("email", { required: "Por favor, ingrese su correo electrónico" })}
            className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4"
            placeholder="Correo electrónico"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          {/* Número de teléfono */}
          <input
            type="text"
            {...register("phone", {
              required: "Por favor, ingrese su número de teléfono",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            })}
            className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 mb-4"
            placeholder="Número de teléfono"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white px-4 py-2 rounded mt-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            ENVIAR
          </button>
        </form>
      </div>
      {/* Sección de contacto */}
      <div className="text-center space-y-4 text-black">
        <p className="text-lg text-black hover:text-gray-700 hover:font-bold transition duration-300">
          ¿Necesita ayuda? Por favor, póngase en contacto con nuestro centro de llamadas.
        </p>
        <div>
          <h2 className="font-bold hover:text-gray-700 hover:font-bold transition duration-300">
            Dirección
          </h2>
          <p className="text-black hover:text-gray-700 hover:font-bold transition duration-300">
            La Paz, Bolivia, 0000
          </p>
        </div>
        <div>
          <h2 className="font-bold hover:text-gray-700 hover:font-bold transition duration-300">
            Teléfonos
          </h2>
          <p className="text-black hover:text-gray-700 hover:font-bold transition duration-300">72017030</p>
          <p className="text-black hover:text-gray-700 hover:font-bold transition duration-300">Celular</p>
        </div>
        <div>
          <h2 className="font-bold hover:text-gray-700 hover:font-bold transition duration-300">
            Correo Electrónico
          </h2>
          <p className="text-black hover:text-gray-700 hover:font-bold transition duration-300">
            centroecuestreapostolsantiago@gmail.com
          </p>
        </div>
      </div>

 
      {/* Google Maps */}
      <div className="w-full max-w-4xl h-64">
        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5256323563365!2d-68.13640682566586!3d-16.500091038616185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf093452e5c5%3A0x4f5aa1a70a57eec3!2sLa%20Paz%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1681234567890!5m2!1ses!2sbo" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default RegisterPage;