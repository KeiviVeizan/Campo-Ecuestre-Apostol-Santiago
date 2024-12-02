import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function RegisterFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Para mensajes de error
  // useEffect(() => {
  //   if (isAuthenticated) navigate("/tasks");
  // }, [isAuthenticated]);
  // const onSubmit = handleSubmit(async (values) => {
  //   console.log(values);
  //   signup(values);
  // });
  const onSubmit = handleSubmit(async (values) => {
    try {
      if(signup(values)){
        setSuccessMessage('¡Registro exitoso! Se registro al usuario correctamente.');
        setErrorMessage(''); 
        reset();
        setTimeout(()=>{setSuccessMessage("")},3000)
        setSelectedRole(null)
      }
    } catch (error) {
      setErrorMessage('Existio un problema al registrar el usuario.');
      setSuccessMessage(''); 
      setTimeout(()=>{setErrorMessage("")},3000)
    }
  });
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
        <Link to="/admin" className="text-gray-500 mb-4 block text-center ">
          &larr; Volver
        </Link>
        
        {/* Mostrar mensaje de éxito */}
        {successMessage && (
          <div className="mb-4 p-4 text-white bg-green-500 rounded-md text-center">
            {successMessage}
          </div>
        )}

        {/* Mostrar mensaje de error */}
        {errorMessage && (
          <div className="mb-4 p-4 text-white bg-red-500 rounded-md text-center">
            {errorMessage}
          </div>
        )}
        <div className="max-w-md pd-10 rounded-md">
          {registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2" key={i}>
              {error}
            </div>
          ))}
          <h1 className="text-3xl my-2 font-bold text-black text-center">
            Nuevo Usuario
          </h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              {...register("username", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="UserName"
            />
            {errors.username && (
              <p className="text-red-500">Username is required</p>
            )}
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">email is required</p>}
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">password is required</p>
            )}
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register("role", {
                    required: "Por favor, seleccione el rol del usuario",
                  })}
                  onChange={handleRoleChange}
                  checked={selectedRole === "Administrador"}
                  value="Administrador"
                  className=" text-gray-600 focus:ring-gray-400"
                />
                <span className="ml-2 text-white">Administrador</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register("role", {
                    required: "Por favor, seleccione el rol del usuario",
                  })}
                  onChange={handleRoleChange}
                  checked={selectedRole === "Vendedor"}
                  value="Vendedor"
                  className=" text-gray-600 focus:ring-gray-400"
                />
                <span className="ml-2 text-white">Vendedor</span>
              </label>
            </div>
            {errors.plan && (
              <p className="text-green-500 text-sm">{errors.role.message}</p>
            )}
            <button
              className="bg-sky-500 text-white px-4 py-2 rounded-md my-2"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterFormPage;
