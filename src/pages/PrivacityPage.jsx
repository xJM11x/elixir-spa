const PrivacityPage = () => {
    return(
        <div className="pt-[148px] pb-[58px] px-[20px]  sm:px-[40px] md:px-[80px]">
            <h1 className="font-playfair-display  font-bold text-[28px] md:text-[32px] text-[#485935]">Aviso de Privacidad</h1>            
            <p className="font-open-sans text-black text-[14px] md:text-[16px] my-[20px]">De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares,ELIXIR SPA, con domicilio en calle sexta, moderna , es responsable del tratamiento y protección de sus datos personales.
            Los datos que recopilamos a través de este sitio web, formularios en línea, redes sociales, aplicaciones de mensajería o plataformas de pago (incluyendo nombre, teléfono, correo electrónico e información relacionada con la cita o el pago), serán utilizados para los siguientes fines:</p>
            <ul className="list-disc font-open-sans text-black text-[14px] md:text-[16px] mx-[20px]">
                <li>Agendar y confirmar citas para los servicios ofrecidos por el Spa (limpiezas faciales, hidratación, masajes, mascarillas personalizadas, terapias de relajación, entre otros).</li>
                <li>Gestionar pagos a través de medios electrónicos.</li>
                <li>Contactarlo para asuntos relacionados con su reservación, seguimiento de servicio o atención al cliente.</li>
                <li>Enviarle promociones, noticias, recordatorios o encuestas, únicamente si usted lo autoriza expresamente.</li>
            </ul>
            <h1 className="font-playfair-display mt-[30px] font-bold text-[28px] md:text-[32px] text-[#485935]">Medidas de seguridad</h1>            
            <p className="font-open-sans text-black text-[14px] md:text-[16px] my-[20px]">   ELIXIR SPA implementa medidas administrativas, técnicas y físicas para proteger su información personal, tales como:</p>
            <ul className="list-disc font-open-sans text-black text-[14px] md:text-[16px] mx-[20px]">
                <li>Acceso restringido a datos personales.</li>
                <li>Uso de plataformas de pago seguras y certificadas.</li>
                <li>Encriptación del sitio mediante protocolos HTTPS/SSL.</li>
            </ul>
            <h1 className="font-playfair-display mt-[30px] font-bold text-[28px] md:text-[32px] text-[#485935]">Derechos ARCO</h1>     
            <p className="font-open-sans text-black text-[14px] md:text-[16px] my-[20px]">   Usted puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO) respecto al tratamiento de sus datos personales. Para ello, deberá enviar una solicitud al correo electrónico: soporte@elixirspa.com
   Este aviso puede ser modificado en el futuro para cumplir con actualizaciones legales o mejoras en nuestros servicios. Cualquier cambio será publicado en esta misma sección del sitio web.</p>
        </div>
    )
}

export default PrivacityPage;