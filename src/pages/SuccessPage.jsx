import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

const SuccessPage = () => {
  const qrRef = useRef(null);

  // Función para descargar el QR
  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-compra.png";
    downloadLink.click();
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#5C6C4A] mb-2">¡Compra Exitosa!</h1>
        <p className="text-gray-700 mb-6">
          Gracias por tu compra. Tu pago fue procesado correctamente y tu reserva ha sido registrada.
        </p>

        {/* QR */}
        <div ref={qrRef} className="flex flex-col items-center mb-6">
          <QRCodeCanvas
            value="https://tusitio.com/reserva-exitosa"
            size={180}
            bgColor="#FFFFFF"
            fgColor="#000000"
          />
          <button
            onClick={downloadQR}
            className="mt-4 bg-[#5C6C4A] hover:bg-[#465235] text-white py-2 px-4 rounded-lg"
          >
            Descargar QR
          </button>
        </div>

        <Link
          to="/"
          className="bg-[#93A267] hover:bg-[#b2c17f] text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
