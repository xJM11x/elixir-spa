import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    const linkClass =
    "relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300";

    const isActive = (path) =>
    location.pathname === path ? "after:w-full" : "after:w-0 hover:after:w-full";
    return(
        <div className="bg-[#5C6C4A] text-[#FBFBFB] px-[20x] fixed min-h-[108px] z-10 w-screen max-w-full">
            <div className="flex items-center justify-around">
                <Link to={"/"} className="flex items-center">
                    <img className="cursor-pointer" src="/images/Logo.png"></img>
                    <h1 className="cursor-pointer font-playfair-display text-[32px] lg:text-[52px] xl:text-[64px] font-medium">ELIXIR SPA</h1>
                </Link>
                <div>
                    <ul className="font-open-sans text-[22px] lg:text-[28px] ease-in-out flex flex-row gap-[32px]">
                    <Link to="/" className={`${linkClass} ${isActive("/")}`}>Inicio</Link>
                    <Link to="/services" className={`${linkClass} ${isActive("/services")}`}>Servicios</Link>
                    <Link to="/blog" className={`${linkClass} ${isActive("/blog")}`}>Blog</Link>
                    <Link to="/reservation" className="rounded-[8px] bg-[#93A267] hover:scale-105 hover:bg-[#b2c17f] cursor-pointer text-white px-[12px] py-[6px] w-fit flex items-center justify-center">
                        <p className="font-open-sans font-bold">RESERVA AHORA</p>
                    </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;