import { Link } from "react-router-dom";

const Boton = ({name,link}) => {
    return(
        <Link to={link} className="rounded-[5px] bg-[#93A267] transition-transform hover:scale-105 hover:bg-[#636d43] cursor-pointer text-white px-[20px] md:px-[30px] py-[12px] md:py-[18px] flex items-center justify-center">
            <p className="text-[18px] md:text-[24px] font-open-sans font-bold">{name}</p>
        </Link>
    )
}

export default Boton;