import Publication from "../components/Publication";

const BlogPage = () => {
    
    const publications = [
        {
            image: "/images/Blogs/Blog1.png",
            title: "Consejos para Antes y Después de una Cita de Spa",
            text: "Aquí te compartimos algunos consejos prácticos para que tu cita de spa sea realmente transformadora.",
        },
        {
            image: "/images/Blogs/Blog2.png",
            title: "Beneficios de una Limpieza Facial Profesional",
            text: "Un buen masaje no solo relaja, también mejora tu salud física y mental. Libera el estrés, alivia dolores y recarga tu energía en solo una sesión. ¡Tu cuerpo lo merece!.",
        },
        {
            image: "/images/Blogs/Blog3.png",
            title: "La Importancia de Ir a un Spa: Más Allá del Lujo, una Necesidad para tu Bienestar",
            text: "Ir al spa no es un lujo, es bienestar. Regálate ese momento para desconectar del estrés, cuidar tu piel y reconectar contigo misma. ¡Tu mente y tu cuerpo te lo agradecerán!",
        },
        {
            image: "/images/Blogs/Blog4.png",
            title: "Tipos de piel: Cómo saber cuál es la tuya y qué necesita",
            text: "Cada piel es única y necesita cuidados distintos. Aprende a identificar tu tipo de piel y dale lo que realmente necesita para lucir sana, joven y radiante. ¡Tu piel te lo dirá con resultados!",
        },
    ]
    
    return(
        <div className="px-[60px] pb-[200px] flex flex-col items-center">
            <h1 className="font-playfair-display text-center  font-bold text-[48px] text-[#485935] pt-[143px] pb-[84px]">Blog</h1>            
            <div className="flex flex-col lg:flex-row">
                <div className="relative w-fit pr-0 md:pr-[48px]">
                    {publications.map((publ, index) => (
                        <Publication key={index} image={publ.image} text={publ.text} title={publ.title}/>
                    ))}
                    <div className="hidden lg:block absolute right-0 top-[-64px] h-[calc(100%+128px)] w-[1px] bg-[#000000]"/>
                    <div className="w-full h-[1px] bg-[#000000]"/>
                </div>
                <div className="max-w-[464px] ml-0 md:ml-[50px] flex lg:block items-center flex-col">
                    <h1 className="font-playfair-display font-bold text-[28px] text-[#485935] pt-[30px] pb-[22px]">CATEGORIA</h1>
                    <p className="text-[#000000] font-open-sans text-[18px] font-bold mb-[22px]">TODAS LAS PUBLICACIONES</p>
                    <h1 className="font-playfair-display text-center md:text-start font-bold text-[28px] text-[#485935] mb-[36px]">PUBLICACIONES RECIENTES</h1>
                    <div className="gap-[36px] flex flex-col max-w-[320px]">
                        {publications.map((publ, index) => (
                            <div key={index} className="flex items-center">
                                <img src={publ.image} className="mr-[15px] max-w-[120px] rounded-[8px] aspect-square object-center" alt="publicacion" />
                                <p className="font-open-sans font-bold text-[18px] text-[#485935]">{publ.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;