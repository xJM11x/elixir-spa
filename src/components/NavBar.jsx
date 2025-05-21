import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Usa Lucide o tu propio ícono SVG

const NavBar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const linkClass =
        "relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300";

    const isActive = (path) =>
        location.pathname === path ? "after:w-full" : "after:w-0 hover:after:w-full";

    return (
        <div className="bg-[#5C6C4A] text-[#FBFBFB] px-4 fixed min-h-[108px] z-10 w-screen max-w-full flex">
            <div className="flex items-center justify-between px-2 lg:px-12 w-full">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img className="cursor-pointer" src="/Logo.svg" alt="Logo" />
                    <h1 className="cursor-pointer font-playfair-display text-[28px] lg:text-[52px] xl:text-[64px] font-medium">ELIXIR SPA</h1>
                </Link>

                {/* Botón Hamburguesa en móvil */}
                <button onClick={toggleMenu} className="lg:hidden">
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Menú de navegación */}
                <ul className={`flex-col lg:flex-row font-open-sans text-[22px] lg:text-[28px] ease-in-out gap-6 lg:gap-[32px] absolute lg:static top-full left-0 w-full lg:w-auto bg-[#5C6C4A] lg:bg-transparent px-6 py-4 lg:p-0 transition-all duration-300 ${isOpen ? "flex" : "hidden"} lg:flex`}>
                    <Link to="/" className={`${linkClass} ${isActive("/")}`} onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link to="/services" className={`${linkClass} ${isActive("/services")}`} onClick={() => setIsOpen(false)}>Servicios</Link>
                    <Link to="/blog" className={`${linkClass} ${isActive("/blog")}`} onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link to="/reservation" className="transition-transform rounded-[8px] bg-[#93A267] hover:scale-105 hover:bg-[#b2c17f] cursor-pointer text-white px-[12px] py-[6px] w-fit flex items-center justify-center" onClick={() => setIsOpen(false)}>
                        <p className="font-open-sans font-bold">RESERVA AHORA</p>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;