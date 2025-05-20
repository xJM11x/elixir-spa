import { Link, useParams } from "react-router-dom";
import AutoFormattedArticle from "../components/ConvertArticle";
import { blogContents } from "../data/blogContent";
import articles  from "../data/articles.json";

const ArticlePage = () => {
    const { id } = useParams();
    const content = blogContents[id];
    const publications = articles
    return(
        <div className="pt-[170px] px-[80px] flex justify-center pb-[70px]">
            <div className="w-fit relative pr-0 md:pr-[48px]">
                <AutoFormattedArticle content={content}/>
                <div className="absolute h-[98%] bg-[#000000] w-[0.65px] right-0 bottom-0"/>
            </div>
            <div className="max-w-[464px] ml-0 md:ml-[50px] flex lg:block items-center flex-col">
                <h1 className="font-playfair-display font-bold text-[28px] text-[#485935] pt-[30px] pb-[22px]">PUBLICACIONES RECIENTES</h1>
                <div className="gap-[36px] flex flex-col max-w-[320px]">
                    {publications.map((publ, index) => (
                        publ.id != id ? (                                                
                        <Link to={`/article/${publ.id}`} key={index} className="flex items-center cursor-pointer hover:scale-105">
                            <img src={publ.image} className="mr-[15px] max-w-[120px] rounded-[8px] aspect-square object-center" alt="publicacion" />
                            <p className="font-open-sans font-bold text-[18px] text-[#485935]">{publ.title}</p>
                        </Link>) : null
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ArticlePage;