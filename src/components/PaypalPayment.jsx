import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const PayPalPayment = () => {
  const navigate = useNavigate();

  return (
    <PayPalScriptProvider options={{ "client-id": "AcAxC-c20q4LrOvPX6UrbVPbRaTiXCoZ27s2nNsntTVuJUSFEVo9rwMnMBK043_LVL4pA8wq8vZwbV4_",
        currency: "USD"
     }}>
      <div className="z-0 w-full flex justify-center">
        <div className="w-full max-w-[400px]">
          <PayPalButtons
            style={{
              layout: "vertical",
              color: "gold",
              shape: "pill",
              label: "pay",
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "spa",
                    amount: {
                      value: "10.00",
                      currency_code: "USD",
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {            
            navigate("/success")
            }}
            onCancel={() => {
              alert("⚠️ El pago fue cancelado.");
            }}
            onError={(err) => {
              console.error("Error en el pago:", err);
              alert("❌ Ocurrió un error durante el proceso de pago.");
            }}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;