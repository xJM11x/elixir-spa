import { Link } from "react-router-dom";

const Blog = () => {
    return(
        <div className="px-[20px] sm:px-[40px] md:px-[80px] w-screen max-w-full">
            <h1 className="font-playfair-display text-center font-bold text-[48px] text-[#485935] mb-[45px] mt-[56px]">BLOG</h1>
            <div className="w-full h-[1px] bg-black mb-[40px]"/>
            <div className="flex flex-col md:flex-row w-full relative justify-center">
                <img className="md:mr-[20px] object-cover w-[80%] md:w-auto mx-auto md:mx-0 md:max-w-[50%]" src="/images/BlogConsejos.png" alt="blog1"></img>
                <div className="h-full flex flex-col min-h-[300px] gap-2 md:justify-around md:min-w-[300px] max-w-[726px]">
                    <h1 className="mt-[20px] md:mt-0 font-semibold font-open-sans text-[24px] sm:text-[28px] md:text-[32px]">Consejos para Antes y Después de una Cita de Spa</h1>
                    <p className="font-open-sans  text-[14px] md:text-[18px]">Aquí te compartimos algunos consejos prácticos para que tu cita de spa sea realmente transformadora.</p>
                    <Link to={"/blog"} className="rounded-[8px] bg-[#93A267] hover:bg-[#636d43] cursor-pointer text-white px-[11px] py-[12px] w-fit flex items-center justify-center">
                        <p className="text-[18px] font-open-sans font-bold">VER BLOG</p>
                    </Link>                    
                </div>
            </div>    
            <div className="w-full h-[1px] bg-black mt-[40px] mb-[65px]"/>        
        </div>
    )
}

export default Blog;