import Image from "next/image";

import esther from "../public/img/esther.jpeg";

export default function Hero() {
  return (
    <div
      id="hero"
      className=" bg-yellow-400 flex flex-row relative  w-screen md:py-6"
    >
      <div className="md:my-10 lg:ml-20 text-left lg:text-center  my-8 mx-auto md:mx-10 ml-4">
        <h1 className="md:text-7xl lg:text-8xl xl:text-9xl font-bold font-oswald text-black text-6xl pt-2 ">
          Esther Lizardo
        </h1>
        <p className="md:text-lg lg:text-2xl mt-4 text-gray-600 font-robotoCondensed">
          I&apos;m a Front-end developer based in Europe.
        </p>
      </div>
      <div className="">
        <div className="md:bottom-2 md:absolute md:right-10 mr-16 md:mr-0 my-2 pt-2 md:my-0 lg:right-20 ">
          <Image
            priority
            src={esther}
            alt="Esther Lizardo"
            className="  rounded-full  w-48  md:w-56 xl:w-64 shadow-lg shadow-yellow-600 border-l"
          />
        </div>
      </div>
    </div>
  );
}
