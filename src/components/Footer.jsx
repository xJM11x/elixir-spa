const Footer = () => {
    return(
        <div className="text-[#FBFBFB] font-open-sans">
            <div className="bg-[#5C6C4A] py-[54px] px-[167px] flex">  
                <div className="mr-[100px]">
                   <h1 className="max-w-[187px] font-bold text-[24px]">MENÚ DE SITIO</h1>
                    <div className="min-w-[187px] text-[20px] flex flex-col gap-[24px]">
                        <p>INICIO</p>                    
                        <p>SERVICIOS</p>
                        <p>BLOG</p>
                        <p>CONTACTO</p>
                    </div>
                </div>     
                <div>
                   <h1 className="font-bold text-[24px]">REDES SOCIALES</h1>
                   <div className="gap-[26px] mb-[74px] mt-[13px] flex">
                        <img className="bg-[#485935] rounded-[5px] p-[4.25px]" src="/images/Facebook.svg"></img>
                        <img className="bg-[#485935] rounded-[5px] p-[4.25px]" src="/images/Youtube.svg" alt="" />
                        <img className="bg-[#485935] rounded-[5px] p-[4.25px]" src="/images/Instagram.svg" alt="" />
                   </div>
                    <h1 className="font-bold text-[24px] mb-[80px]">AVISO DE PRIVACIDAD</h1>
                </div>         
            </div>
            <div className="font-open-sans text-[24px] font-bold text-center py-[17px] bg-[#485935]">
                Derechos reservados © Elixir Spa |C. Sexta, Moderno, 87380 Heroica Matamoros, Tamps.
            </div>
        </div>
    )
}

export default Footer;