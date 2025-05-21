import { Navigate, useParams } from "react-router-dom";
import ConvertService from "../components/ConvertService";
import FadeInSection from "../components/FadeInSection";

const ServiceDetailPage = () => {

    const { id } = useParams();
    const servicesData = [
        {
            "id": "limpieza",
            "imagen": "/images/services/LimpiezaFacial.png",
            "content1": `# Limpieza Facial Profesional
## Renueva tu piel, siéntete fresca y radiante

La limpieza facial es un tratamiento esencial para mantener tu piel sana, libre de impurezas y con un brillo natural. A lo largo del día, tu rostro acumula 
suciedad, grasa, células muertas y contaminantes que obstruyen los poros, provocando brotes, puntos negros y una apariencia apagada. Nuestro servicio de limpieza facial está diseñado para revitalizar tu piel desde la primera sesión.`,
            "content2": `### ¿Qué incluye nuestro tratamiento?

## Evaluación del tipo de piel
Personalizamos el procedimiento de acuerdo a tus necesidades específicas.
## Limpieza profunda con vapor
Abrimos los poros para eliminar impurezas de forma eficaz y sin dañar la piel.
## Exfoliación suave
Retiramos las células muertas que opacan tu rostro.
## Extracción de puntos negros y espinillas
De forma cuidadosa, sin causar daño ni irritación.
## Mascarilla calmante
Aplicamos una mascarilla adaptada a tu piel para hidratar, calmar y proteger.
## Masaje facial relajante
Estimula la circulación y deja tu piel con un efecto fresco y tonificado.
## Hidratación y protección final
Sellamos el tratamiento con productos que nutren tu piel y la dejan protegida.`,
            "content3": `### Beneficios de nuestra limpieza facial

Elimina impurezas profundas

Mejora la textura y luminosidad del rostro

Reduce la aparición de acné y puntos negros

Estimula la renovación celular

Deja tu piel limpia, suave y revitalizada`,
            "content4": `### ¿Para quién es ideal este tratamiento?

Este servicio es ideal para todo tipo de piel, tanto hombres como mujeres. Especialmente recomendado si:
* Sientes tu piel grasa o apagada
* Tienes puntos negros o espinillas
* Hace tiempo que no te haces una limpieza profunda
* Quieres preparar tu rostro para otros tratamientos`,        
        },
        {
            "id": "hidratacion",
            "imagen": "/images/services/Hidratacion.png",
            "content1": `# Hidratación Facial

## Devuélvele a tu piel a frescura, elasticidad y luminosidad que merece.

La hidratación facial es ideal para todo tipo de piel, especialmente aquellas que se sienten secas, apagadas o tirantes por factores como el clima, el estrés o la falta de cuidados. En nuestro spa, utilizamos productos profesionales y técnicas avanzadas para restaurar el equilibrio natural de tu piel, mejorar su textura y dejarla visiblemente más suave y saludable.`,
            "content2": `### ¿Qué incluye el servicio?

## Limpieza profunda para eliminar impurezas.

## Aplicación de tónico equilibrante.

## Sérum o mascarilla hidratante adaptada a tu tipo de piel.

## Masaje facial relajante para activar la circulación.

## Sellado con crema hidratante nutritiva.
`,
            "content3": `### Beneficios de nuestra hidratación facial:

* Restaura la barrera de hidratación natural.
* Previene la descamación y el envejecimiento prematuro.
* Mejora la elasticidad y el tono de la piel.
* Deja una sensación de frescura, suavidad y bienestar inmediato.
`,
            "content4": `### ¿Para quién es ideal este tratamiento?

Este tratamiento es perfecto antes de eventos especiales o como parte de una rutina de autocuidado mensual.`,        
        },
        {
            "id": "mascarillas",
            "imagen": "/images/services/Mascarillas.png",        
            "content1": `# Mascarillas Personalizadas

## Tratamientos únicos para una piel única.

Cada piel tiene necesidades diferentes, por eso nuestras mascarillas son totalmente personalizadas según tu tipo de piel y sus condiciones actuales. Ya sea para hidratar, purificar, iluminar o calmar, elegimos cuidadosamente los ingredientes ideales para ti.`,
            "content2": `### ¿Qué incluye el servicio?

## Evaluación rápida de tu piel.

## Selección y aplicación de mascarilla adecuada (arcillas, extractos naturales, colágeno, antioxidantes, etc.).

## Tiempo de reposo con ambiente relajante.

## Retiro suave con toalla húmeda y finalización con hidratante.
`,
            "content3": `### Beneficios de nuestras mascarillas personalizadas:

* Trata problemas específicos como acné, manchas o resequedad.
* Hidrata, nutre y equilibra tu piel profundamente.
* Mejora el aspecto y textura de tu rostro desde la primera sesión.
* Aumenta la luminosidad y frescura natural.
`,
            "content4": `### ¿Para quién es ideal este tratamiento?

Ideal si buscas un tratamiento exprés pero efectivo, ¡perfecto antes de un evento o para consentirte en tu día libre!`,        
        },
        {
            "id": "masajes",
            "imagen": "/images/services/MasajesFaciales.png",
            "content1": `# Masajes Faciales
## Relaja tu rostro, renueva tu energía.

Nuestros masajes faciales combinan técnicas manuales suaves y precisas para relajar los músculos del rostro, mejorar la circulación sanguínea y estimular la producción de colágeno. Son ideales para liberar tensiones acumuladas, reducir la hinchazón y darle a tu piel un aspecto descansado y radiante.`,
            "content2": `### ¿Qué incluye el servicio?

## Limpieza básica del rostro.

## Masaje facial con movimientos drenantes, lifting y relajantes.

## Uso de aceites o cremas según tu tipo de piel.

## Finalización con toallas calientes y crema nutritiva.
`,
            "content3": `### Beneficios de nuestros masajes faciales:

* Disminuye la tensión y el estrés facial.
* Mejora el tono muscular y la elasticidad.
* Estimula el flujo sanguíneo y linfático.
* Brinda un efecto rejuvenecedor inmediato.
`,
            "content4": `### ¿Para quién es ideal este tratamiento?

Perfecto si pasas mucho tiempo frente a pantallas, sufres de tensión en la mandíbula o simplemente quieres darte un momento de paz.`,        
        },
        {
            "id": "terapias",
            "imagen": "/images/services/Terapias.png",        
            "content1": `# Terapias de Relajación Facial
## Relaja tu rostro, calma tu mente.

Nuestras terapias de relajación facial están diseñadas para liberar el estrés acumulado en los músculos faciales, mejorar la circulación y brindarte una sensación profunda de calma y bienestar. Ideal para quienes viven con tensión diaria o buscan un momento de desconexión total.`,
            "content2": `### ¿Qué incluye el servicio?

## Ambientación suave con música, aromas y luz tenue.

## Técnicas manuales de presión y deslizamiento en rostro, cuello y hombros.

## Aplicación de aceites o cremas relajantes naturales.

## Finalización con compresas tibias y respiración guiada.
`,
            "content3": `### Beneficios de nuestra relajación facial
            
* Alivia tensión muscular y dolores de cabeza.
* Mejora la oxigenación de la piel y su aspecto.
* Disminuye signos de fatiga como ojeras o hinchazón.
* Te deja con una sensación renovada y armoniosa.
`,
            "content4": `### ¿Para quién es ideal este tratamiento?

Perfecta para cerrar la semana con un respiro o recargar energías antes de un día importante.`,        
        }
    ]
    var service

    servicesData.forEach((serv) => {
            if(serv.id == id){
            service = serv
            console.log(service)
            return
        }
    });
    
    if (!service) {
        return <Navigate to="/" />;        
    }

    return(
        <div className="pt-[108px] w-full  flex justify-center flex-col bg-gradient-to-b from-[#CADBB7] to-[#93A267] ">
            <div className=" w-full flex flex-col px-[20px] md:px-[80px] items-center">
                <FadeInSection>
                <div className="text-center md:text-start flex flex-col-reverse md:flex-row max-w-[878px] pt-[40px] md:pt-[60px]">
                    <img className="mx-auto md:mx-0 w-full max-w-[306px] mt-[24px] md:mb-0 md:mr-[33px]" src={service.imagen} alt="servicio" />
                    <ConvertService content={service.content1}/>
                </div>
                </FadeInSection>
                <FadeInSection>
                <div className="md:justify-between flex flex-col md:flex-row max-w-[878px] my-[34px]" >
                    <ConvertService content={service.content2}/>
                    <img className="w-full mt-[33px]  mx-auto md:mx-0 max-w-[412px] md:ml-[33px]" src="/images/services/Facial.png" alt="servicio" />
                </div>
                </FadeInSection>
            </div>
            <div className="px-[20px] md:px-[80px] bg-[#FBFBFB]/50 py-[40px] flex justify-center mb-[100px]">
                <div style={{ boxShadow: '0 2px 2px rgba(0, 0, 0, .3)' }} className=" w-full bg-white flex flex-col px-[35px] pb-[60px] pt-[27px]">
                    <div className="flex justify-between flex-col lg:flex-row items-center">
                        <div className="text-center md:text-start max-w-[537px] mb-[40px]">
                            <FadeInSection>
                                <ConvertService content={service.content3}/>
                            </FadeInSection>
                        </div>
                        <FadeInSection>
                            <img className="mb-[30px] md:mb-0 w-full max-w-[306px] md:mx-[42px]" src="/images/benefits.png" alt="servicio" />                    
                        </FadeInSection>
                    </div>
                    <FadeInSection><ConvertService content={service.content4}/></FadeInSection>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailPage;