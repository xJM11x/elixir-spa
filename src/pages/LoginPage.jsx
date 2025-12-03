import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });

  const { handleLogin } = useAuth();
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await handleLogin(form);     
        if(res.data){
            console.log(res);
            navigate("/home");
        }
      }
      catch(err){
        console.log(err);
      }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
        Elixir Spa
      </h1>
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl border border-green-200">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Iniciar Sesión
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-green-700 font-semibold">Usuario</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Escribe tu usuario"
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold">Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Escribe tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition"
          >
            Entrar
          </button>
          <Link to={"/register"} className="text-green-700 hover:text-green-950">¿No tienes una cuenta? Registrate</Link>
        </form>
      </div>
    </div>
  );
}
