import { Link } from "react-router-dom";

const Blog = () => {
    return(
        <div className="px-[80px] w-screen max-w-full">
            <h1 className="font-playfair-display text-center font-bold text-[48px] text-[#485935] mb-[45px] mt-[56px]">BLOG</h1>
            <div className="w-full h-[1px] bg-black mb-[40px]"/>
            <div className="flex w-full relative justify-center h-[300px]">
                <img className="mr-[106px]" src="/images/BlogConsejos.png" alt="blog1"></img>
                <div className="h-full flex flex-col justify-around max-w-[726px]">
                    <h1 className="font-semibold font-open-sans text-[32px]">Consejos para Antes y Después de una Cita de Spa</h1>
                    <p className="font-open-sans text-[18px]">Aquí te compartimos algunos consejos prácticos para que tu cita de spa sea realmente transformadora.</p>
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