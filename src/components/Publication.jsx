import { Link } from "react-router-dom";

const Publication = ({image,title,text,id}) => {
    return(
        <div>
            <div className="w-fit">
                <div className="w-full h-[0.65px] bg-[#000000]"/>
                <div className="max-w-[650px] py-[37px] items-center sm:items-stretch flex flex-col sm:flex-row">
                    <img className="mb-[20px] sm:mb-0 rounded-[8px] mr-[15px] md:mr-[25px] max-h-[349px] max-w-[200px] aspect-[12/14] object-cover" src={image} alt="blog"/>
                    <div className="max-w-[400px] flex flex-col justify-between items-center sm:items-stretch">
                        <div>
                            <h1 className=" mb-[24px] font-playfair-display font-bold text-[#485935] text-[18px] sm:text-[24px] md:text-[28px]">{title}</h1>
                            <p className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px]">{text}</p>
                        </div>
                        <Link to={`/article/${id}`} className="my-[20px] rounded-[8px] bg-[#93A267] hover:scale-105 hover:bg-[#636d43] cursor-pointer text-white px-[11px] py-[12px] w-fit flex items-center justify-center">
                            <p className="text-[18px] font-open-sans font-bold">VER MÁS</p>
                        </Link>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publication;