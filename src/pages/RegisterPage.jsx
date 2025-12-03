import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../req/Auth";

export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", password: "" });

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
        const res = await Register(form)      
        if(res.data){
            console.log(res);
            navigate("/login");
        }
      }
      catch(err){
        console.log(err);
      }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl border border-green-200">
        
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Crear Cuenta
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-green-700 font-semibold">Usuario</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Tu usuario"
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold">Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
