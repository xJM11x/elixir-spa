import { Link } from "react-router-dom";
import Boton from "./Boton";

const Footer = () => {
    return(
        <div className="text-[#FBFBFB] font-open-sans">
            <div className="bg-[#5C6C4A] w-full py-[30px] px-[20px] sm:px-[40px] md:px-[80px] items-center md:items-start flex-col md:flex-row flex justify-around gap-[20px]">  
                <div className="flex md:block items-center flex-col justify-center">
                   <h1 className="font-bold text-[18px]">MENÚ DE SITIO</h1>
                    <div className="text-[14px] flex flex-col gap-[24px]">
                        <Link className="mt-4" to={"/"}>INICIO</Link>                    
                        <Link to={"/services"}>SERVICIOS</Link>
                        <Link to={"/blog"}>BLOG</Link>
                    </div>
                </div>     
                <div className="flex md:block items-center justify-center flex-col">
                   <h1 className="font-bold text-[18px]">REDES SOCIALES</h1>
                   <div className="gap-[26px] mb-[30px] mt-[13px] flex items-center">
                        <Link to={"https://www.facebook.com"}> <img className="transition-transform hover:scale-105 bg-[#485935] rounded-[5px] p-[4.25px]" src="/images/Facebook.svg"></img></Link>
                        <Link to={"https://www.youtube.com"}> <img className="transition-transform hover:scale-105 bg-[#485935] rounded-[5px] p-[4.25px]" src="/images/Youtube.svg" alt="" /></Link>
                        <Link to={"https://www.instagram.com"}> <img className="transition-transform hover:scale-105 bg-[#485935] rounded-[5px] p-[4.25px]" src="/images/Instagram.svg" alt="" /></Link>
                   </div>
                    <Link to={"/privacity"} className=" transition-transform hover:scale-105 font-bold text-[18px] mb-[30px]">AVISO DE PRIVACIDAD</Link>
                </div>      
                <div >
                    <Link to={"/reservation"} className="text-[24px] transition-transform hover:scale-105 text-center rounded-[8px] bg-[#93A267] hover:bg-[#b2c17f] cursor-pointer text-white px-[18px] py-[12px] w-fit flex items-center justify-center">
                        <p className="font-open-sans font-bold">RESERVA AHORA</p>
                    </Link>     
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