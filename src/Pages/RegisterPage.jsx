import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";
import { useState } from "react";
import Email from "../Components/Email.jsx";

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
            className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Nombre"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

          {/* Email */}
          <input
            type="email"
            {...register("email", { required: "Por favor, ingrese su correo electrónico" })}
            className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
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
            className="w-full bg-gray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Número de teléfono"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

          {/* Plan de inversión */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Plan de inversión</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register("plan", { required: "Por favor, seleccione un plan" })}
                  value="Fase 1"
                  className="form-radio text-gray-600 focus:ring-gray-400"
                />
                <span className="ml-2 text-gray-700">Fase 1</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register("plan", { required: "Por favor, seleccione un plan" })}
                  value="Fase 2"
                  className="form-radio text-gray-600 focus:ring-gray-400"
                />
                <span className="ml-2 text-gray-700">Fase 1</span>
              </label>
            </div>
            {errors.plan && <p className="text-red-500 text-sm">{errors.plan.message}</p>}
          </div>

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
      <div className="text-center space-y-4">
        <p className="text-lg">¿Necesita ayuda? Por favor, póngase en contacto con nuestro centro de llamadas.</p>
        <div>
          <h2 className="font-bold">Central de Reservas</h2>
          <p>605 6475730</p>
          <p>+57 3014032525 | +57 3014563676</p>
          <p>reservas@cartagenadubai.com</p>
        </div>
        <div>
          <h2 className="font-bold">Departamento Comercial</h2>
          <p>ecommerce@cartagenadubai.com</p>
          <p>dircomercial@cartagenadubai.com</p>
        </div>
        </div>
 
      {/* Google Maps */}
      <div className="w-full max-w-4xl h-64">
        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.435566131456!2d-75.55647892558094!3d10.423336042154572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f617dd1d84d%3A0x5a6e1e4799d47b70!2sHotel%20Cartagena%20Dubai!5e0!3m2!1ses!2sco!4v1681234567890!5m2!1ses!2sco"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h1> Vista de como sera el email que le llegara al interesado </h1>
      <Email />
    </div>
  );
}

export default RegisterPage;
