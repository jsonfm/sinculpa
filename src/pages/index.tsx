// Gatsby / React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Components
import { GridFood } from "@/components/GridFood";

// API
import { arepas } from "@/api/arepas";
import { salads } from "@/api/salads";
import { cocktails } from "@/api/cocktails";
import { dinners } from "@/api/dinners";
import { yogurts } from "@/api/yogurts";
import { snacks } from "@/api/snacks";
import { lights } from "@/api/lights";
import { drinks } from "@/api/drinks";
import { hotdrinks } from "@/api/hotdrinks";

// Plugins
import scrollTo from 'gatsby-plugin-smoothscroll';
import { ParallaxBanner } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Styles
import "@/styles/index.css";
import { SEO } from "@/components/SEO";
import { Leaf } from "@/components/svgs/Leaf";
// import { useRef } from "react";

export default function IndexPage() {
  return (
    <>
      <section className={`relative border-b-2 py-12 min-h-screen w-full grid lg:grid-cols-2 place-content-center text-white ease-out duration-300 z-10`}>
        <StaticImage
          src="../images/spiralbrownhd2.png"
          alt="spiral"
          class="w-full max-w-[600px] absolute bottom-0 left-1/2 -translate-x-1/2"
        />
        <div className="hidden lg:flex items-center font-poiret justify-center text-4xl light-on bg-black/0">Encuentra el equilibrio</div>
        <div className="menu-card">
          <StaticImage
            alt="logo"
            src="../images/logo.png"
            placeholder="blurred"
            className="z-10 h-40 w-auto object-contain"
            objectFit="contain"
          />
          <p className="text-5xl mt-6 mb-8 font-cookie underline underline-offset-2">Menú</p>
          <div className="grid grid-cols-2 gap-y-3 place-content-center text-xl text-center px-6 mb-4">
            <div onClick={() => scrollTo("#snacks-section")} className="menu-name light-on delay-75"><Leaf/> <p className="w-[90%] text-start">A toda hora</p></div>
            <div onClick={() => scrollTo("#fast-options")} className="menu-name light-on delay-100"><p className="w-[90%] text-end">Opciones Ligeras</p> <Leaf/></div>
            <div onClick={() => scrollTo("#arepas-section")} className="menu-name light-on delay-150"><Leaf/> <p className="w-[90%] text-start">Arepas</p></div>
            <div onClick={() => scrollTo("#salads-section")} className="menu-name light-on delay-200 justify-end"><p className="w-[90%] text-end">Ensaladas</p> <Leaf/></div>
            <div onClick={() => scrollTo("#dinners-section")} className="menu-name light-on delay-300"><Leaf/> <p className="w-[90%] text-start">Meriendas</p></div>
            <div onClick={() => scrollTo("#cocktails-section")} className="menu-name light-on justify-end"><p className="w-[90%] text-end">Cócteles </p><Leaf/></div>
            <div onClick={() => scrollTo("#fruits-section")} className="menu-name light-on"><Leaf/> <p className="w-[90%] text-start">Ensaladas de Frutas</p></div>
            <div onClick={() => scrollTo("#juices-section")} className="menu-name light-on justify-end"><p className="w-[90%] text-end">Jugos y batidos </p><Leaf/></div>
            <div onClick={() => scrollTo("#hotdrinks-section")} className="menu-name light-on"><Leaf/> <p className="w-[90%] text-start">Bebidas calientes y postres</p></div>
          </div>
          <p className="mt-auto lg:hidden font-cookie text-2xl self-end px-5 mb-4">Encuentra el equilibrio</p>
        </div>
      </section>

      <section id="snacks-section" className="w-full min-h-screen text-white py-16 xl:py-32">
        <p className="font-bold text-center font-cookie text-[#7e4e2c] text-6xl mb-12 md:mb-24 xl:mb-32 mx-auto rounded-md w-64 relative">A toda hora</p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:px-32 gap-6 md:gap-32 xl:gap-16 px-5 place-content-center">
        {snacks.map((snack, index) =>(
          <div className="relative flex flex-col item-center w-full" key={`snack-${index}`}>
            <img
              loading="lazy"
              src={`${snack.image}?w=600`}
              className="h-80 w-80 lg:h-72 xl:h-80 rounded-full border-4 border-white mx-auto mb-4 object-cover"
            />
            <p className="-mt-10 w-24 text-yellow-700 text-center mb-4 mx-auto p-4 rounded-md bg-white font-bold text-xl">$ {snack.price.toFixed(2)}</p>
            <div className="bg-white min-h-40 md:h-48 w-72 px-5 py-5 mx-auto rounded-md text-black flex flex-col">
              <p className="text-xl font-bold text-yellow-700">{snack.name}</p>
              <p className="text-black h-[70%] overflow-y-auto my-auto">{snack.ingredients}</p>
            </div>
          </div>
        ))}
        </div>
      </section>

      <section id="fast-options" className="relative min-h-[70vh] bg-black/60">
          <ParallaxBanner
                layers={[{
                  "image": "https://sinculpasite.files.wordpress.com/2022/09/emapanaditas.jpeg",
                  "speed": -20
                }]}
                className="absolute top-0 w-full min-h-[100vh]"
          />
            <div className="absolute top-0 w-full h-full bg-black/50 grid place-content-center ">
              <div  className="fast-choice-menu">
                  <p className="text-[#7e4e2c] text-center mb-20 font-cookie text-4xl">Opciones Ligeras</p>
                  {lights.map((light, index) => (
                    <div className="flex justify-between my-4 text-lg" key={`light-${index}`}>
                      <p className="w-[60%] text-[#7e4e2c]">{light.name}</p>
                      <p className="font-bold">$ {light.price.toFixed(2)}</p>
                    </div>
                  ))}
              </div>
            </div>
      </section>
      <section id="salads-section" className="min-h-[100vh] py-12 md:py-24 xl:py-32 ">
        <p className="text-center text-brown font-cookie text-6xl lg:text-7xl mb-12">Ensaladas</p>
        <GridFood
          food={salads}
        />
      </section>

      <section className={`w-full min-h-[100vh]  bg-desert bg-cover  scroll-smooth bg-black/80  text-white`}>
        <div className="bg-black/70 w-full min-h-screen grid place-content-center py-16">
        <div className="flex flex-col lg:flex-row mx-auto items-center max-w-[800px] my-auto py-12  gap-12">
            <div className="flex flex-col items-center gap-4">
              <StaticImage
              alt="izai"
              class="h-[500px] w-[300px] rounded-md border-4 -scale-x-100 hover:scale-x-100"
              src="https://sinculpasite.files.wordpress.com/2022/07/sinculpa.jpeg"
            />
            <p className="font-poiret text-2xl">Since 2019</p>
            </div>
            <div className="font-cookie text-center text-4xl lg:text-5xl min-w-[300px] max-w-[500px]">
              <p className="mx-auto">Nadie llega a la tierra prometida, sin antes pasar por el desierto.</p>
              <p className="mt-4 text-3xl">{`~Izai Pino.`}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fruits-section" className="w-full py-24 relative grid min-h-[100vh] lg:bg-cover scroll-smooth">
        <div className=" absolute top-0 left-0 w-full h-full z-10"></div>
        <div className="z-10 w-full grid gap-3 place-content-center">
          <p className="text-center text-brown z-10 text-6xl mb-12 font-cookie">Ensaladas de Frutas</p>
          <div className="w-[330px] lg:w-[500px] min-h-96 rounded-md bg-brown text-white mx-auto  px-4 py-7 mb-12 z-10">
            <p className="font-bold text-xl">{yogurts[0].name}</p>
            <div className="w-[95%] mb-2 h-[2px] bg-white mt-2"></div>
            <p className="text-xl mt-2">{yogurts[0].ingredients}</p>
            <p className="text-xl text-end mt-3 font-bold">$ {yogurts[0].price.toFixed(2)}</p>
          </div>

          {yogurts.slice(1).map((yogurt, index) =>(
            <div className="flex flex-col md:flex-row gap-4 items-center z-10 mx-auto my-4" key={`yogurt-${index}`}>
              <img
                loading="lazy"
                src={`${yogurt.image}?w=600`}
                className="w-64 h-64 rounded-full border-4 object-cover"
              />
              <div className="bg-brown lg:h-[60%] w-[20rem] lg:w-[24rem] text-white p-4 rounded-md font-bold">
                <p className="font-bold text-xl">{yogurt.name}</p>
                <div className="w-[95%] mb-2 h-[2px] bg-white"></div>
                <p className="h-[50%] overflow-y-auto">{yogurt.ingredients}</p>
                <p className="font-bold text-xl text-end">$ {yogurt.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="arepas-section" className="w-full min-h-[100vh] py-12 pb-32">
        <p className="text-brown text-center font-bold font-cookie text-6xl lg:text-7xl mb-12">Arepas</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center container-lg mx-auto  px-4">
        {arepas.map((item, index) =>(
          <div className="flex flex-col w-full hover:drop-shadow-xl hover:lg:-translate-y-3 ease-out duration-300 hover:cursor-pointer" key={`arepa-${index}`}>
            <img
              loading="lazy"
              src={`${item.image}?w=600`}
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

      <section id="dinners-section" className="w-full min-h-[100vh] py-12 xl:py-32 md:px-4 text-white">
        <p className="mb-12 font-cookie text-6xl text-center text-brown">Meriendas</p>
        <div className="grid md:grid-cols-2 gap-y-5 place-content-center place-items-center container-lg mx-auto">
          {dinners.map((dinner, index) => (
            <div className="w-[95%]  text-white  hover:lg:-translate-y-3 ease-out duration-300 hover:cursor-pointer" key={`dinner-${index}`}>
              <img
                loading="lazy"
                src={`${dinner.image}?w=600`}
                className="w-full h-48 md:h-64 xl:h-72 object-cover mb-4"
              />
              <div className="h-48 py-2">
                <p className="text-xl font-bold bg-white text-brown w-4/6 px-4 mb-2">{dinner.name}</p>
                <div className="h-[50%] pt-2 overflow-y-auto overscroll-y-auto px-4">{dinner.ingredients}</div>
                <div className="text-xl lg:text-xl font-bold text-end bg-white text-brown px-4">$ {dinner.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cocktails-section" className="min-h-[100vh] grid place-content-center bg-drinks-mobile lg:bg-drinks bg-cover  bg-center lg:py-12">
        <div className="glassmorphism-black py-12 min-w-[330px] max-w-[500px] mx-auto">
          <p className="text-center font-bold font-cookie text-6xl lg:text-7xl mb-12 text-brown">Cócteles bajos en calorías</p>
          <div className="grid gap-3 w-80 md:w-[30rem] mx-auto px-2 lg:px-4">
            {cocktails.map((cocktail, index) =>(
              <div className="flex justify-between text-white text-xl" key={`cocktails-${index}`}>
                <div className="flex flex-col w-4/6 md:w-5/6">
                  <p className="font-bold text-brown">{cocktail.name}</p>
                  <p className="text-base"> {cocktail.ingredients}</p>
                </div>
                <p>$ {cocktail.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="juices-section" className="w-full min-h-[100vh] grid place-content-center lg:py-6 bg-juices-mobile bg-center lg:bg-juices bg-cover">
          <div className="glassmorphism-brown min-h-screen text-white w-[100vw] max-w-[500px] px-8 py-12">
            <p className="text-6xl font-bold font-cookie text-center mb-12">Jugos y Batidos</p>
            {drinks.map((drink, index) => (
              <div className="flex flex-col my-3 w-full" key={`drink-${index}`}>
                <div className="flex justify-between">
                  <div className="flex flex-col w-[70%]">
                    <p className="text-2xl font-bold mb-1">{drink.name}</p>
                    <ul className="list-disc pl-7 text-xl">
                      {drink.ingredients && drink.ingredients.split(",").map((taste, index) => (
                        <li className="capitalize" key={`taste-${index}`}>{taste}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-bold text-2xl">$ {drink.price.toFixed(2)}</p>
              </div>
              </div>
            ))}
          </div>
      </section>

      <section id="hotdrinks-section" className="w-full min-h-[100vh] bg-postre-mobile lg:bg-postre bg-center bg-cover grid place-content-center px-4 lg:py-12">
        <div className="glassmorphism-white min-h-screen py-12 px-4 w-[100vw] max-w-[500px] mx-auto text-brown">
          <p className="text-center font-cookie text-5xl mt-10 mb-20 w-[300px] mx-auto">Bebidas calientes y postres</p>
          {hotdrinks.map((drink, index) => (
            <div className="font-bold flex justify-between my-3 text-xl" key={`hotdrink-${index}`}>
              <p>{drink.name}</p>
              <p className="text-xl">$ {drink.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export const Head = () => (
  <SEO />
)
