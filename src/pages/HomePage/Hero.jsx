import Boton from "../../components/Boton";

const Hero = () => {
    return(
        <div className="text-center">
            <div className="h-[108px]"></div>
            <div className="h-[calc(100vh-108px)] w-screen max-w-full relative">
                <div className="absolute z-[-1] h-full w-full">
                    <img src="/images/HeroImage.png" className="w-full h-full"></img>
                </div>
                <div className="px-[80px] h-full w-full flex justify-center items-center text-white flex-col">
                    <h1 className="mb-[24px] font-playfair-display font-bold text-[50px]">Elixir Spa - Refresh. Relax. Renew</h1>
                    <p className="mb-[40px] font-open-sans text-[24px] font-bold">Elixir spa donde la calma florece</p>
                    <Boton name={'RESERVA AHORA'} />
                </div>
                <p className="text-center absolute bottom-0 left-0 font-open-sans text-[20px] font-bold text-white ml-[40px] mb-[20px]">C. Sexta, Moderno, 87380<br/> Tel: +52 868313-1313<br/> Lunes a Domingo 9:00 am a 4:00 pm</p>
            </div>
        </div>
    )
}

export default Hero;