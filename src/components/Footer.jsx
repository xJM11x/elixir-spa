import Boton from "./Boton";

const Footer = () => {
    return(
        <div className="text-[#FBFBFB] font-open-sans">
            <div className="bg-[#5C6C4A] w-full py-[30px] px-[80px] items-center md:items-start flex-col md:flex-row flex justify-around gap-[20px]">  
                <div className="flex md:block items-center flex-col justify-center">
                   <h1 className="font-bold text-[18px]">MENÚ DE SITIO</h1>
                    <div className="text-[14px] flex flex-col gap-[24px]">
                        <p>INICIO</p>                    
                        <p>SERVICIOS</p>
                        <p>BLOG</p>
                        <p>CONTACTO</p>
                    </div>
                </div>     
                <div className="flex md:block items-center justify-center flex-col">
                   <h1 className="font-bold text-[18px]">REDES SOCIALES</h1>
                   <div className="gap-[26px] mb-[30px] mt-[13px] flex">
                        <img className="bg-[#485935] rounded-[5px] p-[4.25px]" src="/images/Facebook.svg"></img>
                        <img className="bg-[#485935] rounded-[5px] p-[4.25px]" src="/images/Youtube.svg" alt="" />
                        <img className="bg-[#485935] rounded-[5px] p-[4.25px]" src="/images/Instagram.svg" alt="" />
                   </div>
                    <h1 className="font-bold text-[18px] mb-[30px]">AVISO DE PRIVACIDAD</h1>
                </div>      
                <div >
                    <div className="text-[24px] text-center rounded-[8px] bg-[#93A267] hover:bg-[#b2c17f] cursor-pointer text-white px-[18px] py-[12px] w-fit flex items-center justify-center">
                        <p className="font-open-sans font-bold">RESERVA AHORA</p>
                    </div>     
                </div>

            </div>
            <div className="font-open-sans text-[18px] font-bold text-center py-[17px] px-[20px]  bg-[#485935]">
                <p>
                    Derechos reservados © Elixir Spa |C. Sexta, Moderno, 87380 Heroica Matamoros, Tamps.
                </p>
            </div>
        </div>
    )
}

export default Footer;