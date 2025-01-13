const Card = ({ cardImg, name, location, layoutClasses }) => {
  return (
    <>
      <div
        className={`${layoutClasses} w-full rounded-2xl overflow-hidden hover:cursor-pointer group-hover:blur-sm peer-hover:blur-none transition-all duration-700 mx-auto`}
        style={{
          backgroundImage: `url(${cardImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="h-full w-full flex flex-col mx-auto justify-end items-center text-center"
          style={{
            background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 60%)",
          }}
        >
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col items-center justify-center mx-[17px]">
            <h4 className="font-circularBlack text-[30px] text-white transition-all duration-300">
                {name}
            </h4>
            <p className="font-circularBook text-[16px] text-white uppercase transition-all duration-300">{location}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;