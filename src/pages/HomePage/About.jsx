import FadeInSection from "../../components/FadeInSection";

const About = () => {
    return(
        <div className="bg-[#CADBB780] text-center flex items-center justify-center flex-col py-[117px] px-[20px] sm:px-[40px] md:px-[80px]">
            <FadeInSection><h1 className="font-playfair-display font-bold text-[32px] sm:text-[38px] md:text-[48px] text-[#485935] mb-[40px] md:mb-[82px]">SOBRE NOSOTROS</h1></FadeInSection>
            <FadeInSection><p className="max-w-[890px] font-open-sans text-[16px] sm:text-[18px] md:text-[22px]">En ELIXIR SPA creamos más que momentos de relajación: diseñamos experiencias que nutren tu piel, calman tu mente y elevan tu energía. Somos ese espacio donde el tiempo se detiene, las tensiones se disuelven y tú vuelves a conectar contigo. Aquí no solo te cuidas… te renuevas por dentro y por fuera.</p></FadeInSection>
        </div>
    )
}
export default About;