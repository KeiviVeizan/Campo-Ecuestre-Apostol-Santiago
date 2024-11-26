import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/admin");
  }, [isAuthenticated]);
  return (
    <div className="flex h-screen">
      <div className="hidden sm:flex w-1/2 ">
        <img
          src="../../public/images/left-section.svg"
          alt="Logo"
          className="mb-4 mx-auto w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full md:w-full items-center justify-center ">
        <div className="w-full max-w-md">
          <Link to="/" className="text-gray-500 mb-4 block text-left">
            &larr; Return Home
          </Link>
          {signinErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-center" key={i}>
              {error}
            </div>
          ))}
          <h1 className="text-2xl font-bold text-center mb-4">
            INICIO DE SESION
          </h1>
          <p className="text-center text-gray-500 mb-8">
            INGRESE SU CONTRASEÑA Y USUARIO
          </p>
          <form onSubmit={onSubmit} className="space-y-6">
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full border rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">password is required</p>
            )}
            <button
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
