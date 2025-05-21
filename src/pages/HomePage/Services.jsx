import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from "react"; 
import { Link } from 'react-router-dom';

const Services = () => {

    const swiperRef = useRef(null);
    const slides = [
        {
            image: "/images/services/Hidratacion.png",
            text: "HIDRATACIÓN",
            link: "hidratacion"
        },
        {
            image: "/images/services/LimpiezaFacial.png",
            text: "LIMPIEZA FACIAL",
            link: "limpieza"
        },
        {
            image: "/images/services/MasajesFaciales.png",
            text: "MASAJES FACIALES",
            link: "masajes"
        },
        {
            image: "/images/services/Mascarillas.png",
            text: "MASCARILLAS",
            link: "mascarillas"
        },
        {
            image: "/images/services/Terapias.png",
            text: "TERAPIAS",
            link: "terapias"
        },
    ];
    return(
        <div className=''>
            <h1 className="font-playfair-display text-center  font-bold text-[48px] text-[#485935] mb-[82px] mt-[56px]">SERVICIOS</h1>
                <div className="w-full h-full relative flex items-center justify-center select-none my-[64px]">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={64}
                        loop = {true}
                        className="h-full"
                        breakpoints={{
                            320: { slidesPerView: 1.5 },
                            640: { slidesPerView: 3 }, 
                            1024: { slidesPerView: 4 }, 
                        }}
                        centeredSlides = {true}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide className="h-full max-w-[308px]" key={index}>
                                <div className="flex h-[306px] justify-center items-center relative">
                                    <div className='relative'>
                                        <img className="max-h-[306px] min-w-[124px] aspect-square" src={slide.image} />
                                        <div className=' inset-0 text-white absolute font-bold  bg-[#0B0B0B80] flex items-center justify-center flex-col'>                                    
                                            <p className='text-center text-[26px] font-playfair-display'>{slide.text}</p>
                                            <Link to={`/serviceDetail/` + slide.link} className='group hover:bg-[#636d43] cursor-pointer font-open-sans text-[20px] absolute flex items-center justify-center  bg-[#93A267] bottom-0 w-full h-full max-h-[20%]'>
                                                <p className=' group-hover:scale-110'>VER MÁS</p>
                                            </Link>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {slides.map((slide, index) => (
                            <SwiperSlide className="h-full max-w-[308px]" key={index}>
                                <div className="flex h-[306px] justify-center items-center relative drop-shadow-black drop-shadow-[2px]">
                                    <div className='relative'>
                                        <img className="max-h-[306px] min-w-[124px] aspect-square" src={slide.image} />
                                        <div className=' inset-0 text-white absolute font-bold  bg-[#0B0B0B80] flex items-center justify-center flex-col'>                                    
                                            <p className='text-center text-[26px] font-playfair-display'>{slide.text}</p>
                                            <Link to={`/serviceDetail/` + slide.link} className='group hover:bg-[#636d43] cursor-pointer font-open-sans text-[20px] absolute flex items-center justify-center  bg-[#93A267] bottom-0 w-full h-full max-h-[20%]'>
                                                <p className=' group-hover:scale-110'>VER MÁS</p>
                                            </Link>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className='flex items-center absolute left-0 w-[100px] md:w-[200px] h-[306px] bg-[linear-gradient(to_right,_#FBFBFB_0%,_#FBFBFB_0%,_rgba(251,251,251,0)_100%)] z-[2]'>
                        <img 
                        onClick={() => swiperRef.current?.swiper?.slidePrev()}
                        className='ml-[20px] w-[40%] md:w-auto rotate-180 cursor-pointer' src="/images/services/Arrow.png"></img>                        
                    </div>
                    <div className='flex items-center absolute right-0 w-[100px] md:w-[200px] h-[306px] bg-[linear-gradient(to_left,_#FBFBFB_0%,_#FBFBFB_0%,_rgba(251,251,251,0)_100%)] z-[2]'>
                        <img 
                        onClick={() => swiperRef.current?.swiper?.slideNext()}
                        className='absolute w-[40%] md:w-auto mr-[20px] right-0 cursor-pointer' src="/images/services/Arrow.png"></img>                        
                    </div>
            </div>


        </div>
    )
}

export default Services;