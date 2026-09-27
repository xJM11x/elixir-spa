import { useEffect, useRef, useState } from "react";

const FadeInSection = ({children}) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            });
        }, { threshold: 0.1 });

        // Verifica que domRef.current sea válido antes de observar
        if (domRef.current) {
            observer.observe(domRef.current);
        }

        // Cleanup seguro para evitar el error de unobserve
        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, []);

    return (
        <div
        className={`opacity-0 ${isVisible ? 'animate-fade-in-section' : ''}`}
        ref={domRef}
        >
            {children}
        </div>
    );
}

export default FadeInSection;