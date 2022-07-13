import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';


const MenuCard = () => {
  return (
    <div className="bg-amber-600/30 border-4 flex flex-col justify-center items-center w-full md:w-96 h-full py-7 max-h-[800px] ease-in duration-300">
      <StaticImage
        alt="logo"
        className="object-cover"
        placeholder="blurred"
        src="../images/logo.png"
      />
      <p className="text-white font-bold text-3xl mt-5 pulsate">BIENVENIDO</p>
      {/* <p className="text-white">Aquí nuestro Menú</p> */}
      <div className="flex justify-center w-full mb-4">
        <div className="h-1 bg-white w-1/2">.</div>
      </div>
      <div className="grid grid-cols-2 mt-4 text-white">
        <div className="m-4 cursor-pointer">
          <p className="text-xl text-center uppercase" onClick={() => scrollTo('#brunchs-section')}>Brunch</p>
        </div>
        <div className="m-4">
          <p className="text-xl text-center uppercase" onClick={() => scrollTo('#arepas-section')}>Arepas</p>
        </div>
        <div className="m-4">
          <p className="text-xl text-center uppercase" onClick={() => scrollTo('#plates-section')}>Platos Fuertes</p>
        </div>
        <div className="m-4">
          <p className="text-xl text-center uppercase" onClick={() => scrollTo('#salad-section')}>Ensaladas</p>
        </div>
        <div className="m-4">
          <p className="text-xl text-center uppercase" onClick={() => scrollTo('#mexican-section')}>Mexicana</p>
        </div>
        <div className="m-4">
          <p className="text-xl text-center uppercase" onClick={() => scrollTo('#bebidas-section')}>Bebidas</p>
        </div>
        <div className="m-4">
          <p className="text-xl text-center uppercase" onClick={() => scrollTo('#coffee-section')}>Cafetería y postres</p>
        </div>
        <div className="m-4">
          <p className="text-xl text-center uppercase" onClick={() => scrollTo('#wine-section')}>Vinos</p>
        </div>
      </div>
    </div>
  );
};

export { MenuCard };
