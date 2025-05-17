const Button = ({name}) => {
    return(
        <div className="rounded-[5px] bg-[#93A267] hover:bg-[#636d43] cursor-pointer text-white px-[30px] py-[18px] flex items-center justify-center">
            <p className="text-[24px] font-open-sans font-bold">{name}</p>
        </div>
    )
}

export default Button;