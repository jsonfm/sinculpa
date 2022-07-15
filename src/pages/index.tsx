// Gatsby / React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Components
import { Carousel } from '@/components/Carousel';
import { GridFood } from "@/components/GridFood";
import { MenuCard } from "@/components/MenuCard";

// API
import { brunchs } from "@/api/brunchs";
import { arepas } from "@/api/arepas";
import { wines } from "@/api/wines";
import { salads } from "@/api/salads";
import { mexicans }from "@/api/mexicans";
import { plates } from "@/api/plates";
import { coffees } from "@/api/coffees";
import { cocktails } from "@/api/cocktails";
import { dinners } from "@/api/dinners";
import { yogurts } from "@/api/yogurts";

import scrollTo from 'gatsby-plugin-smoothscroll';



export default function IndexPage() {
  return (
    <>
      <section className="w-full min-h-[100vh] py-8 lg:pt-32 lg:pb-32 grid lg:grid-cols-2 place-content-center bg-woods bg-cover  text-white ease-out duration-300 z-10">
        <div className="hidden lg:flex items-center justify-center font-cookie text-7xl">Busca el equilibrio</div>
        <div className="place-self-start flex flex-col items-center mx-auto lg:ml-3 w-[22rem] md:w-[23rem] bg-amber-900/30 border-2 border-white min-h-[95vh] pt-10 lg:pt-5 lg:pb-12 z-10">
          <StaticImage
            alt="logo"
            src="../images/logo.png"
            placeholder="blurred"
            className="w-80 z-10"
          />
          <p className="text-5xl mt-12 mb-8 font-cookie underline underline-offset-2">Menú</p>
          <div className="grid grid-cols-2 gap-7 place-content-center text-center font-cookie text-3xl z-10">
            <p onClick={() => scrollTo("#arepas-section")} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Arepas</p>
            <p onClick={() => scrollTo("#salads-section")} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Ensaladas</p>
            <p className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">A toda hora</p>
            <p onClick={() => scrollTo("#dinners-section")} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Meriendas</p>
            <p onClick={() => scrollTo("#cocktails-section")} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Cócteles</p>
            <p onClick={() => scrollTo("#fruits-section")} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Ensaladas de Frutas</p>
          </div>
          <p className="mt-auto lg:hidden font-cookie text-2xl self-start px-5 mb-4">Busca el equilibrio</p>
          v
          v
        </div>
      </section>

      <section className="w-full min-h-[100vh] bg-zinc-700 flex items-center justify-center">
        <div className="uppercase text-xl text-yellow-500 w-[60%]">Nadie llega a la tierra prometida sin antes pasar por el desierto</div>
      </section>

      <section id="salads-section"  className="min-h-[130vh] py-12 pb-32 bg-[#407d1b]">
        <p className="text-center text-white font-cookie text-6xl lg:text-7xl mb-12">Ensaladas</p>
        <GridFood
          food={salads}
        />
      </section>

      <section className="w-full min-h-[100vh] flex items-center justify-center pb-32">
        <div className="font-cookie text-orange-900 text-6xl">
          <p>Vive,</p>
          <p className="pl-16">Siente,</p>
          <p className="pl-32">Come</p>
        </div>
      </section>

      <section id="fruits-section" className="w-full min-h-[110vh] grid lg:grid-cols-2 place-content-center bg-rose-900 py-12 pb-32">
        <div className="text-white flex flex-col gap-5 px-4 md:px-10 lg:px-16 lg:border-r-4 container-lg-12">
          <p className="font-cookie text-white text-5xl mb-4 lg:mb-8 text-center">Ensalada de frutas</p>
          {yogurts.map((yogurt, index) => (
            <div className="flex justify-between">
              <div className="w-4/6">
                <p className="font-bold text-xl">{yogurt.name}</p>
                <p>{yogurt.ingredients}</p>
              </div>
              <p className="font-bold text-lg">$ {yogurt.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 text-white w-full h-full flex items-center justify-center font-cookie text-2xl lg:text-7xl">Dale sabor a tu vida.</div>
      </section>

      <section id="arepas-section" className="w-full min-h-[100vh] bg-orange-500 py-12 pb-32">
        <p className="text-white text-center font-bold font-cookie text-6xl lg:text-7xl mb-12">Arepas</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 place-content-center container-lg mx-auto  px-4">
        {arepas.map((item, index) =>(
          <div className="flex flex-col w-full border-4 border-white" key={index}>
            <img
              loading="lazy"
              src={item.image}
              className="w-full h-48 md:h-64 lg:h-72 2xl:h-96"
            />
            <div className="text-white bg-green-white pt-3 h-40">
              <p className="text-xl font-bold bg-white text-orange-700 w-2/3 px-5 mb-2">{item.name}</p>
              <p className="h-[35%] overflow-y-auto px-5 my-auto">{item.ingredients}</p>
              <p className="bg-white text-orange-500 text-end px-5 font-semibold text-xl mt-2">$ {item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        </div>
      </section>

      <section id="dinners-section" className="w-full min-h-[100vh] py-12 pb-32 md:px-16 xl:px-32">
        <p className="pt-6 pb-12 font-cookie text-6xl text-blue-700 text-center">Meriendas</p>
        <div className="grid md:grid-cols-2 gap-y-5 place-content-center place-items-center container-lg mx-auto">
          {dinners.map((dinner, index) => (
            <div className="w-[95%] border-2  border-blue-700 text-white" key={index}>
              <img
                loading="lazy"
                src={dinner.image}
                className="w-full h-48 md:h-64 lg:h-72 2xl:h-96"
              />
              <div className="text-blue-700 h-48 py-2 px-4 lg:px-8">
                <p className="bg-white text-blue-700 text-xl font-bold py-2">{dinner.name}</p>
                <div className="h-[50%] pt-2 overflow-y-auto overscroll-y-auto">{dinner.ingredients}</div>
                <div className="text-xl font-bold text-end">$ {dinner.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cocktails-section" className="min-h-[100vh] bg-amber-600 py-32">
        <p className="text-center text-white font-bold font-cookie text-6xl lg:text-7xl mb-12">Cócteles bajos en calorías</p>
        <div className="grid gap-3 w-80 md:w-[30rem] mx-auto">
          {cocktails.map((cocktail, index) =>(
            <div className="flex justify-between text-white text-xl" key={index}>
              <div className="flex flex-col w-4/6 md:w-5/6">
                <p className="font-bold">{cocktail.name}</p>
                <p className="text-base"> {cocktail.ingredients}</p>
              </div>
              <p>$ {cocktail.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

