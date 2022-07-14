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



export default function IndexPage() {
  return (
    <>
      <section className="w-full min-h-[100vh] grid lg:grid-cols-2 bg-gradient-to-r from-neutral-600 to-amber-600 text-white py-2">
        <div className="hidden lg:flex items-center justify-center font-cookie text-7xl">Busca el equilibrio</div>
        <div className="flex flex-col items-center  mx-auto w-[22rem] md:w-[23rem] border-4 min-h-[95vh] pt-10 lg:pt-5 lg:pb-12">
          <StaticImage
            alt="logo"
            src="../images/logo.png"
            placeholder="blurred"
            className="w-80"
          />
          <p className="text-5xl mt-12 mb-8 font-cookie">Menú</p>
          <div className="grid grid-cols-2 gap-7 place-content-center text-center font-cookie text-3xl">
            <p>Arepas</p>
            <p>Ensaladas</p>
            <p>A toda hora</p>
            <p>Meriendas</p>
            <p>Cócteles</p>
            <p>Bebidas</p>
          </div>
          <p className="mt-auto lg:hidden font-cookie text-2xl self-start px-5 mb-4">Busca el equilibrio</p>
        </div>
      </section>
      <section className="w-full min-h-[100vh] grid lg:grid-cols-2 place-content-center bg-rose-900 py-12">
        <Carousel
          slides={brunchs}
        />
        <div className="mt-5 text-white w-full h-full flex items-center justify-center font-cookie text-4xl lg:text-7xl">Dale sabor a tu vida.</div>
      </section>

      <section id="salads-section"  className="min-h-[90vh] py-12">
        <p className="text-center text-green-700 font-cookie text-6xl lg:text-7xl mb-12">Ensaladas</p>
        <GridFood
          food={salads}
        />
      </section>

      <section id="arepas-section" className="w-full min-h-[100vh] bg-orange-500 py-12">
        <p className="text-white text-center font-bold font-cookie text-6xl lg:text-7xl mb-12">Arepas</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 place-content-center container-lg mx-auto  px-4">
        {arepas.map((item, index) =>(
          <div className="flex flex-col w-full border-4 border-white" key={index}>
            <img
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

      <section className="min-h-[100vh] bg-amber-600 py-12">
        <p className="text-center text-white font-bold font-cookie text-6xl lg:text-7xl mb-12">Cócteles bajos en calorías</p>
        <div className="grid gap-3 w-80 md:w-[30rem] mx-auto">
          {cocktails.map((cocktail, index) =>(
            <div className="flex justify-between text-white text-xl">
              <div className="flex flex-col w-4/6 md:w-5/6">
                <p className="font-bold">{cocktail.name}</p>
                <p className="text-base"> {cocktail.ingredients}</p>
              </div>
              <p>$ {cocktail.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

      </section>

      <section id="coffee-section" className="relative min-h-[125vh] py-12 bg-amber-800">
        <div className="absolute top-0 w-full h-full grid lg:grid-cols-2">
          <StaticImage
            className="h-full w-full"
            alt="coffee1"
            src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <StaticImage
            className="h-full w-full"
            alt="coffee2"
            src="https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div className="absolute top-0 w-full h-full grid place-content-center px-5 z-30">
          <div className="flex flex-col bg-black/50  w-[330px] md:w-[400px] max-w-[600px] min-h-[650px] text-white border-4 px-6 py-6">
            <p className="text-6xl font-cookie text-center mb-12">Café y postrería</p>
            {coffees.map((coffee, index)=>(
              <div className="flex justify-between my-1 text-xl" key={index}>
                <p>{coffee.name}</p>
                <p>$ {coffee.price.toFixed(2)}</p>
              </div>
            ))}
            <p className="font-cookie mt-auto">La vida es profunda, como el café de tus ojos.</p>
          </div>
        </div>
      </section>
    </>
  )
}

