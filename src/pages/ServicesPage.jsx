const ServicesPage = () => {
    const services = [
        {
            image: "/images/services/Hidratacion.png",
            text: "Hidratación",
        },
        {
            image: "/images/services/LimpiezaFacial.png",
            text: "Limpieza Facial",
        },
        {
            image: "/images/services/MasajesFaciales.png",
            text: "Masajes Faciales",
        },
        {
            image: "/images/services/Mascarillas.png",
            text: "Mascarillas",
        },
        {
            image: "/images/services/Terapias.png",
            text: "Terapias",
        },
    ];

    return(
        <div className="pt-[108px] w-full flex items-center flex-col relative pb-[115px]">
            <div className="w-full relative">
                <img className="w-full object-cover" src="/images/services.svg" alt="services" />
                <div className="top-0 absolute w-full h-full flex items-center justify-center">
                    <h1 className="mt-[-70px] font-playfair-display text-[52px] font-bold text-white">SERVICIOS</h1>
                </div>
            </div>
            <div className="w-full px-[20px] sm:px-[40px] md:px-[80px] flex justify-center">
                <div className="grid grid-cols-2 gap-y-[32px] gap-x-[10px] sm:gap-x-[35px] md:gap-x-[85px] lg:gap-x-[80px] mt-[54px] bg-white/70 px-[10px] sm:px-[35px] md:px-[97px] py-[45px] rounded-[10px]">
                    {services.map((serv, index) => (
                    <div key={index} className="w-fit font-inter">
                        <img className="rounded-[8px] w-full max-h-[306px] max-w-[308px] aspect-[16/11] object-cover" src={serv.image} alt="serv" />
                        <p className="mt-[12px] text-[20px] font-medium text-[#000000]">{serv.text}</p>
                        <p className="inline-flex cursor-pointer text-[16px] text-[#5C6C4A]">Ver Más</p>
                    </div>
                    ))} 
                </div>
            </div>
            <img className="w-full absolute bottom-0 z-[-1]" src="/images/velas.svg" alt="vela" />
        </div>
    )
}

export default ServicesPage;