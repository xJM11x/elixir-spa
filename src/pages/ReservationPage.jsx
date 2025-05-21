import { useState } from "react";

const ReservetionPage = () => {
    const [service, setService] = useState(false);
    const [scheBtn,setSchBtn] = useState(false);

    const [selectSch,setSelectSch] = useState("Selecciona una hora");
    const [serviceName, setServiceName] = useState();
    const [serviceFakeN,setServiceFakeN] = useState("Selecciona un servicio");
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');


    const services = [
        {
            image: "/images/services/Hidratacion.png",
            text: "Hidratación",
            link: "hidratacion"
        },
        {
            image: "/images/services/LimpiezaFacial.png",
            text: "Limpieza Facial",
            link: "limpieza"        
        },
        {
            image: "/images/services/MasajesFaciales.png",
            text: "Masajes Faciales",
            link: "masajes"
        },
        {
            image: "/images/services/Mascarillas.png",
            text: "Mascarillas",
            link: "mascarillas"
        },
        {
            image: "/images/services/Terapias.png",
            text: "Terapias faciales",
            link: "terapias"
        },
    ];

    const schedule = [];

    for (let hour = 10; hour <= 19; hour++) {
    const formattedHour = hour < 12
        ? `${hour} AM`
        : hour === 12
        ? `12 PM`
        : `${hour - 12} PM`;

    schedule.push(formattedHour);
    }


    return(
        <div className="pt-[108px] px-[80px]">
            <h1 className="mb-[60px] mt-[28px] font-playfair-display text-center font-bold text-[48px] text-[#485935]">Reservación</h1>            
            <div className="flex flex-col w-full relative max-w-[362px] ">
                <p className="font-open-sans text-[18px] mb-[12px] font-bold">Selecciona un servicio facial:</p>
                <div onClick={()=> {service ? setService(false) : setService(true)}} className="relative cursor-pointer px-[10px] py-[16px] flex items-center justify-between w-full font-open-sans text-[18px] font-medium rounded-[10px] bg-[#CADBB7]/80">
                    <p className="text-black font-open-sans text-[16px] font-[400]">{serviceFakeN}</p>   
                    <img onClick={()=> {service ? setService(false) : setService(true)}} className={`cursor-pointer right-0 ${service ? "rotate-180" : ""}`} src="/images/DownIcon.svg" />
                    <div className={`p-[8px] rounded-b-[10px] border-[#FFFFFFA3] border-solid border-[2px] absolute z-[1] right-0 top-[90%] font-open-sans w-full bg-[#CADBB7] text-black ${service ? "block" : "hidden"}`}>
                        {services.map((serv, index) => (
                            <div onClick={() => {setServiceName(serv.link); setServiceFakeN(serv.text)}} className={`flex items-center hover:bg-[#485935] hover:text-white rounded-[8px] px-[8px] text-[16px] cursor-pointer mb-[4px] font-open-sans ${serv.link === serviceName ? "bg-[#485935] text-white" : ""}`}>
                                <img className="rounded-[10px] max-w-[50px] aspect-square" src={serv.image} alt="imagen" />
                                <p  className="ml-[10px]"  key={index} value={serv.link}>{serv.text}</p>
                            </div>
                        ))}
                    </div>       
                </div>
                <p className="font-open-sans text-[18px] mt-[28px] mb-[12px] font-bold">Selecciona una hora:</p>            
                <div onClick={()=> {scheBtn ? setSchBtn(false) : setSchBtn(true)}} className="relative cursor-pointer px-[10px] py-[16px] flex items-center justify-between w-full font-open-sans text-[18px] font-medium rounded-[10px] bg-[#CADBB7]/80">
                    <p className="text-black font-open-sans text-[16px] font-[400]">{selectSch}</p>   
                    <img onClick={()=> {scheBtn ? setSchBtn(false) : setSchBtn(true)}} className={`cursor-pointer right-0 ${scheBtn ? "rotate-180" : ""}`} src="/images/DownIcon.svg" />
                    <div className={`p-[8px] rounded-b-[10px] border-[#FFFFFFA3] border-solid border-[2px] absolute z-[1] right-0 top-[90%] font-open-sans w-full bg-[#CADBB7] text-black ${scheBtn ? "block" : "hidden"}`}>
                        {schedule.map((sch, index) => (
                            <div onClick={() => {setSelectSch(sch); setSelectSch(sch)}} className={`flex items-center hover:bg-[#485935] hover:text-white rounded-[8px] px-[8px] text-[16px] cursor-pointer mb-[4px] font-open-sans ${sch === selectSch ? "bg-[#485935] text-white" : ""}`}>
                                <p  className="ml-[10px]"  key={index} value={sch}>{sch}</p>
                            </div>
                        ))}
                    </div>       
                </div>
                <p className="font-open-sans text-[18px] mt-[28px] mb-[12px] font-bold">Nombre completo:</p>            
                <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="text-black cursor-pointer px-[10px] py-[16px] flex items-center justify-between w-full font-open-sans text-[16px] font-medium rounded-[10px] bg-[#CADBB7]/80">
                </input>
                <p className="font-open-sans text-[18px] mt-[28px] mb-[12px] font-bold">Correo electronico:</p>            
                <input
                type="text"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="mb-[180px] text-black cursor-pointer px-[10px] py-[16px] flex items-center justify-between w-full font-open-sans text-[16px] font-medium rounded-[10px] bg-[#CADBB7]/80">
                </input>
            </div>            

        </div>
    )
}

export default ReservetionPage;