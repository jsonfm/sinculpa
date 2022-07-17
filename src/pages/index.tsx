// Gatsby / React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Components
import { Carousel } from '@/components/Carousel';
import { GridFood } from "@/components/GridFood";
import { MenuCard } from "@/components/MenuCard";

// API
import { arepas } from "@/api/arepas";
import { salads } from "@/api/salads";
import { cocktails } from "@/api/cocktails";
import { dinners } from "@/api/dinners";
import { yogurts } from "@/api/yogurts";
import { snacks } from "@/api/snacks";
import { lights } from "@/api/lights";
import { drinks } from "@/api/drinks";
import {hotdrinks } from "@/api/hotdrinks";
import scrollTo from 'gatsby-plugin-smoothscroll';

// import Parallax from "react-scroll-parallax";


export default function IndexPage() {
  return (
    <>
      <section className="w-full min-h-[100vh] py-8 lg:pt-32 lg:pb-32 grid lg:grid-cols-2 place-content-center bg-woods bg-cover  text-white ease-out duration-300 z-10">
        <div className="hidden lg:flex items-center justify-center font-cookie text-7xl">Encuentra el equilibrio</div>
        <div className="place-self-start flex flex-col items-center mx-auto lg:ml-3 w-[22rem] md:w-[23rem] drop-shadow-2xl bg-amber-900/30 border-2 border-white min-h-[95vh] pt-10 lg:pt-5 lg:pb-12 z-10">
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
            <p onClick={() => scrollTo("#snacks-section")} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">A toda hora</p>
            <p onClick={() => scrollTo("#dinners-section")} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Meriendas</p>
            <p onClick={() => scrollTo("#cocktails-section")} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Cócteles</p>
            <p onClick={() => scrollTo("#fruits-section")} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Ensaladas de Frutas</p>
          </div>
          <p className="mt-auto lg:hidden font-cookie text-2xl self-start px-5 mb-4">Encuentra el equilibrio</p>
        </div>
      </section>

      <section id="snacks-section" className="w-full min-h-[120vh] bg-black/80 grid place-content-center text-white py-12">
        {/* <div className="uppercase text-xl text-yellow-500 w-[60%]">Nadie llega a la tierra prometida sin antes pasar por el desierto</div> */}
        <p className="font-bold text-center font-cookie text-yellow-700 text-6xl mb-12 bg-white/70 mx-auto rounded-md w-64">A toda hora</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:px-32 gap-4 px-5 place-content-center">
        {snacks.map((snack) =>(
          <div className="relative flex flex-col item-center w-full">
            <img
              src={snack.image}
              className="h-80 w-96  rounded-full border-4 border-white mx-auto mb-4 object-cover"
            />
            <p className="-mt-10 w-24 text-yellow-700 text-center mb-4 mx-auto p-4 rounded-md bg-white font-bold text-xl">$ {snack.price.toFixed(2)}</p>
            <div className="bg-white h-40 w-72 px-5 py-3 mx-auto rounded-md text-black">
              <p className="text-xl font-bold text-yellow-700 ">{snack.name}</p>
              <p className="text-black h-[50%] overflow-y-auto">{snack.ingredients}</p>
            </div>
          </div>
        ))}
        </div>

        <div className="bg-stone-800 shadow-[0_0_30px_0px_rgba(255,255,255,0.6)] w-[300px] mx-auto mt-12 px-4 py-12 gap-10 rounded-md">
          <p className="text-center mb-12 font-cookie text-4xl">Opciones Rápidas</p>
          {lights.map((light, index) => (
            <div className="flex justify-between my-4 text-lg" key={index}>
              <p className="w-[60%] text-yellow-600">{light.name}</p>
              <p className="font-bold">$ {light.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="salads-section"  className="min-h-[130vh] py-12 pb-32 bg-yellow-700">
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

      <section id="fruits-section" className="w-full relative min-h-[100vh] grid  bg-fruits lg:bg-cover py-32 pb-32">
        <div className="bg-black/60 absolute top-0 left-0 w-full h-full"></div>
        {/* <div className="text-white z-10 flex flex-col gap-5 px-4 md:px-10 lg:px-16 lg:border-4 lg:border-white container-lg-12 bg-rose-900/70 py-6">
          <p className="font-cookie text-white text-5xl mb-4 lg:mb-8 text-center">Ensalada de frutas</p>
          {yogurts.map((yogurt, index) => (
            <div className="flex justify-between" key={index}>
              <div className="w-4/6">
                <p className="font-bold text-xl">{yogurt.name}</p>
                <p>{yogurt.ingredients}</p>
              </div>
              <p className="font-bold text-lg">$ {yogurt.price.toFixed(2)}</p>
            </div>
          ))}
        </div> */}
        {/* <div className="mt-5 z-10 text-white w-full h-full flex items-center justify-center font-cookie text-2xl lg:text-7xl">Dale sabor a tu vida.</div> */}
        <div className="z-10 w-full grid gap-3 place-content-center">
          <div className="w-[330px] lg:w-[500px] min-h-96 rounded-md bg-white/80 text-gray-600 mx-auto  px-4 py-7 mb-12">
            <p className="font-cookie text-6xl">{yogurts[0].name}</p>
            <p className="text-xl mt-2">{yogurts[0].ingredients}</p>
            <p className="text-4xl text-end mt-3 font-bold">$ {yogurts[0].price.toFixed(2)}</p>
          </div>

          {yogurts.slice(1).map((yogurt, index) =>(
            <div className="flex flex-col md:flex-row gap-4 items-center z-10 mx-auto my-4">
              <img
                src={yogurt.image}
                className="w-64 h-64 rounded-full border-4 object-cover"
              />
              <div className="bg-yellow-600/80 lg:h-[60%] w-[20rem] lg:w-[24rem] text-white p-4 rounded-md font-bold">
                <p className="text-xl font-bold">{yogurt.name}</p>
                <div className="w-[95%] mb-2 h-[2px] bg-white"></div>
                <p className="h-[50%] overflow-y-auto">{yogurt.ingredients}</p>
                <p className="font-bold text-xl text-end">$ {yogurt.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="arepas-section" className="w-full min-h-[100vh] bg-[#894f28] py-12 pb-32">
        <p className="text-white text-center font-bold font-cookie text-6xl lg:text-7xl mb-12">Arepas</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center container-lg mx-auto  px-4">
        {arepas.map((item, index) =>(
          <div className="flex flex-col w-full border-4 border-white hover:drop-shadow-xl hover:lg:-translate-y-3 ease-out duration-300 hover:cursor-pointer" key={index}>
            <img
              loading="lazy"
              src={item.image}
              className="w-full h-48 object-cover md:h-64 lg:h-72 2xl:h-96"
            />
            <div className="text-white bg-green-white pt-3 h-40">
              <p className="text-xl font-bold bg-white text-orange-900 w-2/3 px-5 mb-2">{item.name}</p>
              <p className="h-[35%] overflow-y-auto px-5 my-auto">{item.ingredients}</p>
              <p className="bg-white text-amber-900 text-end px-5 font-semibold text-xl mt-2">$ {item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        </div>
      </section>

      <section id="dinners-section" className="w-full min-h-[100vh] py-12 pb-32 md:px-16 xl:px-32 bg-[#2c2b2b] text-white">
        <p className="pt-6 pb-12 font-cookie text-6xl text-center">Meriendas</p>
        <div className="grid md:grid-cols-2 gap-y-5 place-content-center place-items-center container-lg mx-auto">
          {dinners.map((dinner, index) => (
            <div className="w-[95%] border-2 text-white  hover:lg:-translate-y-3 ease-out duration-300 hover:cursor-pointer" key={index}>
              <img
                loading="lazy"
                src={dinner.image}
                className="w-full h-64 md:h-64 lg:h-72 2xl:h-96 object-covergi"
              />
              <div className=" h-48 py-2 px-4 lg:px-8">
                <p className="text-xl font-bold py-2">{dinner.name}</p>
                <div className="h-[50%] pt-2 overflow-y-auto overscroll-y-auto">{dinner.ingredients}</div>
                <div className="text-xl font-bold text-end">$ {dinner.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cocktails-section" className="min-h-[100vh] bg-drinks-mobile bg-cover  bg-center lg:bg-drinks py-12">
        <div className="bg-black/80 border-4 py-12 max-w-[500px] mx-auto">
          <p className="text-center font-bold font-cookie text-6xl lg:text-7xl mb-12 text-yellow-600">Cócteles bajos en calorías</p>
          <div className="grid gap-3 w-80 md:w-[30rem] mx-auto px-2 lg:px-4">
            {cocktails.map((cocktail, index) =>(
              <div className="flex justify-between text-white text-xl" key={index}>
                <div className="flex flex-col w-4/6 md:w-5/6">
                  <p className="font-bold text-yellow-600">{cocktail.name}</p>
                  <p className="text-base"> {cocktail.ingredients}</p>
                </div>
                <p>$ {cocktail.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full min-h-[100vh] py-12 bg-juices-mobile bg-center lg:bg-juices bg-cover">
          <div className="bg-yellow-600/80 min-h-64 text-white p-5 border-4 max-w-[500px] mx-auto">
            <p className="text-4xl font-bold font-cookie">Jugos y Batidos</p>
            <div className="h-1 w-full bg-white mt-2 mb-6"></div>
            {drinks.map((drink, index) => (
              <div className="flex flex-col my-3" key={index}>
                <div className="flex justify-between">
                  <div className="flex flex-col w-[70%]">
                    <p className="text-2xl font-bold mb-1">{drink.name}</p>
                    <ul className="list-disc pl-7 text-xl">
                      {drink && drink.ingredients.split(",").map((taste, index) => (
                        <li className="capitalize">{taste}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-bold text-2xl">$ {drink.price.toFixed(2)}</p>
              </div>
              </div>
            ))}
          </div>
      </section>

      <section className="w-full min-h-[100vh] bg-postre bg-center bg-cover grid place-content-center px-4 py-12">
        <div className="bg-white/80 px-3 border-4 border-white w-[330px] lg:w-[500px] mx-auto py-6">
          <p className="text-center font-cookie text-5xl text-orange-800 mt-12 mb-24 w-[300px] mx-auto">Bebidas calientes y postres</p>
          {hotdrinks.map(drink => (
            <div className="text-orange-800 font-bold flex justify-between my-3 text-xl">
              <p>{drink.name}</p>
              <p className="text-xl">$ {drink.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

