import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Para acceder a los errores
    setError,
    clearErrors,
  } = useForm();
  
  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-center text-xl font-bold mb-6 text-black">Interesados</h2>
        <form onSubmit={onSubmit}>
          {/* Nombre */}
          <input
            type="text"
            {...register("username", { required: "Por favor, ingrese su nombre" })}
            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Nombre"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

          {/* Email */}
          <input
            type="email"
            {...register("email", { required: "Por favor, ingrese su correo electrónico" })}
            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                  value="Primer Plan"
                  className="form-radio text-gray-600 focus:ring-gray-400"
                />
                <span className="ml-2 text-gray-700">Primer Plan</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register("plan", { required: "Por favor, seleccione un plan" })}
                  value="Segundo Plan"
                  className="form-radio text-gray-600 focus:ring-gray-400"
                />
                <span className="ml-2 text-gray-700">Segundo Plan</span>
              </label>
            </div>
            {errors.plan && <p className="text-red-500 text-sm">{errors.plan.message}</p>}
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Recibir Información
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
