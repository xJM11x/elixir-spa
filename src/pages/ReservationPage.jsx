import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../customCalendar.css'; // Aquí personalizaremos

const ReservetionPage = () => {
    const [service, setService] = useState(false);
    const [scheBtn,setSchBtn] = useState(false);

    const [fakeselectSch,setfakeSelectSch] = useState("Selecciona una hora");

    const [selectSch,setSelectSch] = useState("");
    const [serviceFakeN,setServiceFakeN] = useState("Selecciona un servicio");
    
    const [serviceName, setServiceName] = useState();
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const [fecha, setFecha] = useState(new Date());

    const [errorMessage, setErrorMessage] = useState('');

    const [compra, setCompra] = useState(false)

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

    for (let hour = 9; hour <= 16; hour++) {
    const formattedHour = hour < 12
        ? `${hour} AM`
        : hour === 12
        ? `12 PM`
        : `${hour - 12} PM`;

    schedule.push(formattedHour);
    }

    return(
        <div className="pt-[108px] px-[80px] relative">
            {!compra && (
                <div>
            {errorMessage && (
            <div className="rounded-[15px] border-[3px] border-black fixed font-open-sans text-[20px] mr-[40px] mb-[20px] text-white bottom-0 right-0 bg-red-500 p-4 text-center shadow-md z-[2]">
                {errorMessage}
            </div>
            )}
            <h1 className="mb-[60px] mt-[28px] font-playfair-display text-center font-bold text-[48px] text-[#485935]">Reservación</h1>            
            <div className="flex w-full justify-center">
                <div className="w-full max-w-[362px] ">
                    <div className="flex flex-col relative">
                        <p className="font-open-sans text-[18px] mb-[12px] font-bold">Selecciona un servicio facial:</p>
                        <div onClick={()=> {service ? setService(false) : setService(true)}} className="relative cursor-pointer px-[10px] py-[16px] flex items-center justify-between w-full font-open-sans text-[18px] font-medium rounded-[10px] bg-[#CADBB7]/80">
                            <p className="text-black font-open-sans text-[16px] font-[400]">{serviceFakeN}</p>   
                            <img onClick={()=> {service ? setService(false) : setService(true)}} className={`cursor-pointer right-0 ${service ? "rotate-180" : ""}`} src="/images/DownIcon.svg" />
                            <div className={`p-[8px] rounded-b-[10px] border-[#FFFFFFA3] border-solid border-[2px] absolute z-[1] right-0 top-[90%] font-open-sans w-full bg-[#CADBB7] text-black ${service ? "block" : "hidden"}`}>
                                {services.map((serv, index) => (
                                    <div key={index} onClick={() => {setServiceName(serv.link); setServiceFakeN(serv.text)}} className={`flex items-center hover:bg-[#485935] hover:text-white rounded-[8px] px-[8px] text-[16px] cursor-pointer mb-[4px] font-open-sans ${serv.link === serviceName ? "bg-[#485935] text-white" : ""}`}>
                                        <img className="rounded-[10px] max-w-[50px] aspect-square" src={serv.image} alt="imagen" />
                                        <p  className="ml-[10px]" value={serv.link}>{serv.text}</p>
                                    </div>
                                ))}
                            </div>       
                        </div>
                        <p className="font-open-sans text-[18px] mt-[28px] mb-[12px] font-bold">Selecciona una hora:</p>            
                        <div onClick={()=> {scheBtn ? setSchBtn(false) : setSchBtn(true)}} className="relative cursor-pointer px-[10px] py-[16px] flex items-center justify-between w-full font-open-sans text-[18px] font-medium rounded-[10px] bg-[#CADBB7]/80">
                            <p className="text-black font-open-sans text-[16px] font-[400]">{fakeselectSch}</p>   
                            <img onClick={()=> {scheBtn ? setSchBtn(false) : setSchBtn(true)}} className={`cursor-pointer right-0 ${scheBtn ? "rotate-180" : ""}`} src="/images/DownIcon.svg" />
                            <div className={`p-[8px] rounded-b-[10px] border-[#FFFFFFA3] border-solid border-[2px] absolute z-[1] right-0 top-[90%] font-open-sans w-full bg-[#CADBB7] text-black ${scheBtn ? "block" : "hidden"}`}>
                                {schedule.map((sch, index) => (
                                    <div key={index} onClick={() => {setSelectSch(sch); setfakeSelectSch(sch)}} className={`flex items-center hover:bg-[#485935] hover:text-white rounded-[8px] px-[8px] text-[16px] cursor-pointer mb-[4px] font-open-sans ${sch === selectSch ? "bg-[#485935] text-white" : ""}`}>
                                        <p  className="ml-[10px]" value={sch}>{sch}</p>
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
                        className="text-black cursor-pointer px-[10px] py-[16px] flex items-center justify-between w-full font-open-sans text-[16px] font-medium rounded-[10px] bg-[#CADBB7]/80">
                        </input>
                    </div>            
                </div>
                <div className="flex flex-col max-w-[550px] w-full ml-[150px]">
                    <h2 className="font-open-sans text-[18px] mb-[12px] font-bold">Selecciona una fecha:</h2>
                    
                    <div className="">
                    <Calendar
                        onChange={setFecha}
                        value={fecha}
                        locale="es-ES"
                        next2Label={null}
                        prev2Label={null}
                    />
                    </div>

                    <p className="mt-4 text-lg text-green-700">
                        Fecha seleccionada: {fecha.toLocaleDateString()}
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div
                    onClick={() => {
                    if (!serviceName) {
                        setErrorMessage('Por favor, selecciona un servicio.');
                    } else if (!selectSch) {
                        setErrorMessage('Por favor, selecciona una hora.');
                    } else if (!nombre.trim()) {
                        setErrorMessage('Por favor, ingresa tu nombre.');
                    } else if (!correo.trim()) {
                        setErrorMessage('Por favor, ingresa tu correo.');
                    } else {
                        setErrorMessage('');
                        setCompra(true)
                        return;
                    }

                    // Mostrar mensaje por 3 segundos
                    setTimeout(() => setErrorMessage(''), 3000);
                    }}
                className="my-[60px] inline-flex rounded-[8px] bg-[#93A267] hover:scale-105 hover:bg-[#636d43] cursor-pointer text-white px-[32px] py-[8px] items-center justify-center"
                >
                    <p className="text-[20px] font-open-sans font-bold">Continuar</p>
                </div>
            </div>
            </div>)}

        </div>
    )
}

export default ReservetionPage;