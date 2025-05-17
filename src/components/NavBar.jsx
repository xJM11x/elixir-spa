const NavBar = () => {
    return(
        <div className="bg-[#5C6C4A] text-[#FBFBFB] px-[20x] fixed z-10 w-screen max-w-full">
            <div className="flex items-center justify-around">
                <div className="flex items-center">
                    <img className="cursor-pointer" src="/images/Logo.png"></img>
                    <h1 className="cursor-pointer font-playfair-display text-[32px] lg:text-[52px] xl:text-[64px] font-medium">ELIXIR SPA</h1>
                </div>
                <div>
                    <ul className="font-open-sans text-[22px] lg:text-[28px] ease-in-out flex flex-row gap-[32px]">
                        <li className="relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Inicio</li>
                        <li className="relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Servicios</li>
                        <li className="relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Blog</li>
                        <li className="relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Reservaciones</li>
                        <li className="relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contacto</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;