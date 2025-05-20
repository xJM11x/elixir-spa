import { Link } from "react-router-dom";
import Publication from "../components/Publication";
import articles  from "../data/articles.json";

const BlogPage = () => {
    
    const publications = articles
    
    return(
        <div className="px-[60px] pb-[200px] flex flex-col items-center">
            <h1 className="font-playfair-display text-center  font-bold text-[48px] text-[#485935] pt-[143px] pb-[84px]">Blog</h1>            
            <div className="flex flex-col lg:flex-row">
                <div className="relative w-fit pr-0 md:pr-[48px]">
                    {publications.map((publ, index) => (
                        <Publication key={index} image={publ.image} text={publ.text} title={publ.title} id={publ.id}/>
                    ))}
                    <div className="hidden lg:block absolute right-0 top-[-64px] h-[calc(100%+128px)] w-[0.65px] bg-[#000000]"/>
                    <div className="w-full h-[0.65px] bg-[#000000]"/>
                </div>
                <div className="max-w-[464px] ml-0 md:ml-[50px] flex lg:block items-center flex-col">
                    <h1 className="font-playfair-display font-bold text-[28px] text-[#485935] pt-[30px] pb-[22px]">CATEGORIA</h1>
                    <p className="text-[#000000] font-open-sans text-[18px] font-bold mb-[22px]">TODAS LAS PUBLICACIONES</p>
                    <h1 className="font-playfair-display text-center md:text-start font-bold text-[28px] text-[#485935] mb-[36px]">PUBLICACIONES RECIENTES</h1>
                    <div className="gap-[36px] flex flex-col max-w-[320px]">
                        {publications.map((publ, index) => (
                            <Link to={`/article/${publ.id}`} key={index} className="flex items-center cursor-pointer hover:scale-105">
                                <img src={publ.image} className="mr-[15px] max-w-[120px] rounded-[8px] aspect-square object-center" alt="publicacion" />
                                <p className="font-open-sans font-bold text-[18px] text-[#485935]">{publ.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;