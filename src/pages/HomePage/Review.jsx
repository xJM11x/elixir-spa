const Review = () => {
    return(
        <div className="px-[80px] w-screen max-w-full flex items-center flex-col">
            <h1 className="font-playfair-display text-center font-bold text-[48px] text-[#485935] mt-[38px]">RESEÑAS</h1>
            <p className="font-open-sans font-bold text-[24px] text-center">de nuestros clientes</p>
            <div className="ml-[57px] text-white relative bg-black max-w-[540px] w-full rounded-[24px] pl-[21px] pr-[32px] mt-[65px]">
                <img className="absolute left-[15px] top-[-30px]" src="/images/Ellipse1.png"></img>
                <div className=" ml-[114px] mt-[2px]">
                    <p className="font-open-sans font-bold text-[24px]">Liam Smith</p>
                    <img src="/images/Stars1.png"></img>
                </div>
                <div className="pb-[24px] pt-[15px] ">
                    <p className="font-open-sans font-bold text-[24px]">Una experiencia increíble. Mi piel quedó suave y luminosa después de la limpieza facial. ¡Volveré pronto!</p>
                </div>
            </div>
            <div className="mr-[57px] text-white relative bg-black max-w-[540px] w-full rounded-[24px] pl-[21px] pr-[32px] mt-[65px]">
                <img className="absolute left-[15px] top-[-30px]" src="/images/Ellipse2.png"></img>
                <div className=" ml-[114px] mt-[2px]">
                    <p className="font-open-sans font-bold text-[24px]">Emma Jhonson</p>
                    <img src="/images/Stars1.png"></img>
                </div>
                <div className="pb-[24px] pt-[15px] ">
                    <p className="font-open-sans font-bold text-[24px]">Usan productos de calidad y se nota desde el primer minuto. 100% recomendado.</p>
                </div>
            </div>
            <div className="ml-[57px] text-white relative bg-black max-w-[540px] w-full rounded-[24px] pl-[21px] pr-[32px] mb-[180px] mt-[65px]">
                <img className="absolute left-[15px] top-[-30px]" src="/images/Ellipse3.png"></img>
                <div className=" ml-[114px] mt-[2px]">
                    <p className="font-open-sans font-bold text-[24px]">Esther Jhones</p>
                    <img src="/images/Stars1.png"></img>
                </div>
                <div className="pb-[24px] pt-[15px] ">
                    <p className="font-open-sans font-bold text-[24px]">Probé la hidratación profunda y salí encantada. ¡Mi piel nunca se había sentido tan fresca!</p>
                </div>
            </div>
        </div>
    )
}

export default Review;