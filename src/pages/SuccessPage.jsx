import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#5C6C4A] mb-2">¡Compra Exitosa!</h1>
        <p className="text-gray-700 mb-6">
          Gracias por tu compra. Tu pago fue procesado correctamente y tu reserva ha sido registrada.
        </p>
        <Link to="/" className="bg-[#93A267] hover:bg-[#b2c17f] text-white font-bold py-2 px-6 rounded-lg transition duration-300">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;