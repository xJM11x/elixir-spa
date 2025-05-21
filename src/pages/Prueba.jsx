import { useParams } from "react-router-dom";
import PayPalPayment from "../components/PaypalPayment"

const Prueba = () => {
    const { serviceName } = useParams();
    return(
            <div className="pt-[108px] mb-[80px] relative z-[0] bg-white shadow-lg rounded-xl p-6 max-w-[600px] mx-auto mt-10 border border-gray-200">
                <h2 className="text-3xl font-playfair-display font-semibold text-center text-[#5C6C4A] mb-4">
                    Confirmar Reserva
                </h2>

                {/* Detalles del servicio */}
                <div className="mb-6 text-gray-700">
                    <p className="text-lg font-semibold">💆 Servicio:</p>
                    <p className="ml-2">{serviceName}</p>

                    <p className="text-lg font-semibold mt-4">💵 Precio:</p>
                    <p className="ml-2">$201.65 MXN / $10.00 USD</p>

                    <p className="text-lg font-semibold mt-4">📍 Ubicación:</p>
                    <p className="ml-2">Elixir Spa</p>
                </div>

                {/* Botón de pago */}
                <PayPalPayment/>
            </div>
    )
}

export default Prueba;