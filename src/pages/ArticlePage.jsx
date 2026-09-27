import { Link, Navigate, useParams } from "react-router-dom";
import AutoFormattedArticle from "../components/ConvertArticle";
import { blogContents } from "../data/blogContent";
import articles  from "../data/articles.json";
import FadeInSection from "../components/FadeInSection";

const ArticlePage = () => {
    const { id } = useParams();
    const content = blogContents[id];
    const publications = articles

    if (!content) {
        return <Navigate to="/" />;        
    }

    return(
        <div className="items-center md:items-stretch pt-[170px] px-[20px] sm:px-[40px] md:px-[80px] flex flex-col md:flex-row justify-center pb-[70px]">
            <div className="w-fit relative pr-0 md:pr-[48px]">  
                <FadeInSection>
                    <AutoFormattedArticle content={content}/>
                </FadeInSection>
                <div className="hidden md:block absolute h-[98%] bg-[#000000] w-[0.65px] right-0 bottom-0"/>
            </div>
            <div className="max-w-[464px] ml-0 md:ml-[50px] flex lg:block items-center flex-col">
                <FadeInSection><h1 className="font-playfair-display font-bold text-[18px] sm:text-[24px] md:text-[28px] text-[#485935] pt-[30px] pb-[22px]">PUBLICACIONES RECIENTES</h1></FadeInSection>
                <div className="gap-[36px] flex flex-col max-w-[320px]">
                    {publications.map((publ, index) => (
                        publ.id != id ? (                                                
                        <FadeInSection>
                        <Link to={`/article/${publ.id}`} key={index} className="flex items-center cursor-pointer hover:scale-105">
                            <img src={publ.image} className="mr-[15px] max-w-[120px] rounded-[8px] aspect-square object-center" alt="publicacion" />
                            <p className="font-open-sans font-bold text-[14px] sm:text-[16px] md:text-[18px] text-[#485935]">{publ.title}</p>
                        </Link>
                        </FadeInSection>
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ArticlePage;