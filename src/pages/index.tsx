// Gatsby / React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from 'gatsby-plugin-smoothscroll';

// Components
import { Layout } from "@/components/Layout";
import { Carousel } from '@/components/Carousel';

// API
import { brunchs } from "@/api/brunchs";
import { arepas } from "@/api/arepas";
import { wines } from "@/api/wines";
import { salads } from "@/api/salads";
import { mexicans }from "@/api/mexicans";
import { plates } from "@/api/plates";
import { coffees } from "@/api/coffees";



export default function IndexPage() {
  return (
    <Layout>
      <section className="flex justify-center items-center min-h-[95vh] 2xl:h-[70vh] px-3 py-5 ease-in duration-300">
        <div className="bg-amber-900/30 border-4 flex flex-col justify-center items-center w-full md:w-96 h-full py-7 max-h-[800px] ease-in duration-300">
          <StaticImage
            alt="logo"
            className="object-cover"
            placeholder="blurred"
            src="../images/logo.png"
          />
          <p className="text-white font-bold text-3xl mt-5 pulsate">BIENVENIDO</p>
          <p className="text-white">Aquí nuestro Menú</p>
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
      </section>
      {/* <section className="bg-white h-16 w-full flex justify-center items-center mb-5">
        <p className="text-6xl font-cookie">Busca el equilibrio</p>
      </section> */}
      {/* Brunchs section */}
      <section id="brunchs-section" className="min-h-[60vh]">
        <div className="relative border-4 md:w-1/2 min-h-[60vh] text-white">
          <div className="absolute text-white bg-rose-800/75 z-10 w-3/4 top-10 right-0 px-5 py-4">
            <p className="text-6xl capitalize font-cookie">Brunch</p>
            <p className="text-xl font-semibold underline">{brunchs[0].name}</p>
            <p className="text-lg">{brunchs[0].ingredients}</p>
          </div>
          <div className="absolute bg-white/75 rounded-lg px-5 py-2 bottom-3 left-2 z-10 text-3xl text-pink-700">$ {brunchs[0].price.toFixed(2)}</div>
          <img
            loading="lazy"
            src={brunchs[0].image}
            className="absolute top-0 object-cover h-full w-full"
          />
        </div>
        <div className="bg-rose-800/10 py-5">
          <Carousel
            slides={brunchs.slice(1)}
          />
        </div>
      </section>

      {/* Arepas section */}
      <section id="arepas-section" className="min-h-[60vh] text-center">
        <div className="relative md:w-1/2 mx-auto min-h-[60vh]">
          <div className="absolute z-20 text-white h-48 bg-orange-500/75 px-5 mt-5 py-5">
            <p className="text-6xl font-cookie">Arepas</p>
            <p className="text-xl font-semibold underline">{arepas[0].name}</p>
            <p className="text-lg">{arepas[0].ingredients}</p>
            <p className="text-2xl">${arepas[0].price.toFixed(2)}</p>
          </div>
          <img
            src={arepas[0].image}
            className="absolute top-0 object-cover w-full h-full border"
          />
        </div>
        <div className="min-h-128 grid md:grid-cols-3">
          {arepas.slice(1).map((arepa, index) => (
            <div className="flex flex-col border" key={`arepa-${index}`}>
              <img
                src={arepa.image}
                className="h-64 w-auto object-cover"
              />
              <div className="text-white text-center bg-orange-500/90 h-40 flex flex-col items-center pt-3 px-3">
                <p className="text-2xl underline underline-offset-2 mb-1">{arepa.name}</p>
                <p className="capitalize text-lg">{arepa.ingredients}</p>
                <p className="font-bold mt-2 text-2xl mb-4">$ {arepa.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ensaladas section */}
      <section id="salad-section" className="md:flex flex-col items-center justify-center md:px-7">
        <div className="relative h-96 mb-4 md:h-128 md:w-2/3 border-4">
          <div className="absolute bg-lime-900/75 z-10 h-48 px-4 mt-5 w-3/4 py-2">
            <p className="text-white text-7xl font-cookie">Ensaladas</p>
            <p className="text-white text-base font-semibold">Lechuga, tomate cherry, queso ricota, brotes, pollo, aguacate, maíz amarillo.</p>
          </div>
          <StaticImage
            alt="salad"
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="absolute h-full w-full object-cover top-0"
          />
        </div>
        {salads.map((salad, index)=>(
          <div className="md:self-center relative h-72 mt-1 mb-4 border-4 md:h-96 md:w-1/2" key={`salad-${index}`}>
            <div className="absolute w-full flex flex-col bg-green-800/60 z-20 px-4 py-2 text-white">
              <p className="text-white text-2xl font-bold underline underline-offset-2 mb-2">{salad.name}</p>
              <p className="text-white text-base font-semibold">{salad.ingredients}</p>
              <p className="self-end text-2xl">$ {salad.price.toFixed(2)}</p>
            </div>
            <img
              loading="lazy"
              src={salad.image}
              className="absolute h-full w-full object-cover top-0"
            />
          </div>
        ))}
      </section>

      {/* Mexican section */}
      <section id="mexican-section" className="flex flex-col min-h-[50vh]">
        <div className="relative w-full border-4 min-h-64">
          <div className="absolute text-white bg-yellow-500/70 h-32 z-10 mt-5 px-5">
            <p className="text-6xl font-cookie">Mexicana</p>
          </div>
          <StaticImage
            alt="mexican image"
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="absolute top-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative grid md:grid-cols-2 text-white">
          {mexicans.map((mexican, index) => (
            <div className="flex flex-col border text-white min-h-64">
              <img
                className="w-full h-full"
                src={mexican.image}
              />
              <div className="flex flex-col items-center bg-yellow-500/70 min-h-32 py-2 px-5">
                <p className="text-center font-semibold text-2xl">{mexican.name}</p>
                <p className="text-center text-lg mb-4">{mexican.ingredients}</p>
                <div className="bg-white text-2xl text-yellow-500 px-4 py-2 mb-4 rounded-full">$ {mexican.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* plates section */}
      <section id="plates-section" className="bg-white/40 flex flex-col items-center min-h-[50vh] text-white">
        <div className="relative w-full md:w-4/6 h-60 bg-white/40">
          <StaticImage
            alt="plates"
            src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="absolute w-full h-full object-cover border-8 border-red-700"
          />
          <div className="absolute bottom-0 inset-x-1/2 -translate-x-1/2 bg-red-700 w-2/3 text-white font-cookie text-6xl text-center">
            Platos fuertes
          </div>
        </div>
        <div className="grid md:grid-cols-2">
        {plates.map((plate, index) => (
          <div className="flex flex-col min-h-72 border">
            <img
              src={plate.image}
              className="h-64 w-auto object-cover"
            />
            <div className="bg-red-700 flex flex-col items-center px-5 pt-4 pb-5 h-full">
              <p className="text-fold text-center text-2xl">{plate.name}</p>
              <div className="bg-white h-1 w-16 mt-2 mb-4"></div>
              <p className="text-xl text-center">{plate.ingredients}</p>
              <p className="text-2xl mt-4 bg-white rounded-full px-3 py-2 text-red-700">$ {plate.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* Bebidas section */}
      <section id="bebidas-section" className="bg-orange-700/25 flex flex-col md:flex-row justify-center gap-5">
        <div className="relative h-80 min-h-96 md:min-h-full md:w-1/2">
          <p className="absolute text-6xl text-white z-20 bg-orange-600/50 w-3/4 py-3 px-4 font-cookie mt-5">Bebidas</p>
          <StaticImage
            alt="image"
            src="https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="text-white py-3 px-4 md:w-1/3">
          <div className="flex justify-between gray-gradient gap-3 px-5 py-2  rounded-full mt-3">
              <p className="text-xl font-medium">Jugos Naturales</p>
              <p className="text-xl">$2.00</p>
          </div>
          <div className="flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3">
              <p className="text-xl font-medium">Batidos</p>
              <p className="text-xl">$2.50</p>
          </div>
          <div className="flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3">
              <p className="text-xl font-medium">Limonadas</p>
              <p className="text-xl">$2.00</p>
          </div>
          <p className="text-lg px-4 my-4">Fresa, Mora, Coco, limonada, imperial, limonada clásica.</p>
          <div className="flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3">
              <p className="text-xl font-medium">Smoothies</p>
              <p className="text-xl">$3.00</p>
          </div>
          <p className="text-lg px-4 my-4">Sin culpa: Manzana verde, apio, perejil, pepino, naranja.</p>
          <p className="text-lg px-4 my-4">Chocolate almendra: Cacao, hielo, almendras, miel.</p>
          <p className="text-lg px-4 my-4">Futos del bosque: Fresa, arandanos, mora, avena, leche descremada.</p>

        </div>
      </section>

      {/* Coffe section */}
      <section id="coffee-section">
        <div className="relative h-180">
          <div className="absolute inset-x-1/2 -translate-x-1/2 flex justify-center items-center px-3 py-5 w-full md:w-2/3 lg:w-1/3 h-full z-10">
              <div className="border-4 bg-black/70 px-6 py-6 w-full h-full text-white">
                <p className="text-6xl text-center capitalize mb-6 font-cookie">Cafetería y Postres</p>
                {coffees.map((coffee, index) => (
                <div className="flex justify-between mb-2" key={`coffee-${index}`}>
                  <p className="text-xl">{coffee.name}</p>
                  <p className="text-xl">$ {coffee.price.toFixed(2)}</p>
                </div>
                ))}
              </div>
          </div>
          <div className="absolute flex w-full h-full">
            <StaticImage
              alt="coffe 1"
              src="https://images.pexels.com/photos/333523/pexels-photo-333523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-1/2 object-cover h-full"
            />
            <div className="w-1/2 h-full">
              <StaticImage
                alt="coffe 2"
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* wine section */}
      <section id="wine-section" className="min-h-[80vh] max-h-[20rem] border-8 border-rose-900">
          <div className="relative">
            <div className="absolute flex justify-center items-center overflow-x-auto py-5 z-10 border-4 h-full w-full bg-rose-900/50">
                <Carousel
                  slides={wines}
                  cardPriceStyle="bg-white text-rose-900 font-bold text-2xl px-4 py-2 -mt-3 mb-4 self-center rounded-full"
                  cardIngredientsStyle="bg-rose-900/80 rounded-full flex flex-col items-center justify-center items-center"
                />
            </div>
            <StaticImage
              alt="some image"
              src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full min-h-[80vh] object-cover"
            />
          </div>
      </section>

      <section className="bg-white p-4 flex justify-center items-center py-5">
        <StaticImage
          alt="sinculpa logo"
          src="../images/sinculpa.jpeg"
          className="object-cover md:w-1/2 h-full"
        />
      </section>
    </Layout>
  )
}

