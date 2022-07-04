import * as React from "react";
import { Carousel } from '../components/Carousel';
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../components/Layout";
import { brunchs } from "../api/brunchs";
import { arepas } from "../api/arepas";
import { wines } from "../api/wines";
import { salads } from "../api/salads";
import { mexicans }from "../api/mexicans";
import { plates } from "../api/plates";
import { coffees } from "../api/coffees";
import scrollTo from 'gatsby-plugin-smoothscroll';



export default function IndexPage({data}) {
  return (
    <Layout>
      <section class="flex justify-center items-center min-h-[95vh] 2xl:h-[70vh] px-3 py-5 ease-in duration-300">
        <div class="bg-amber-900/30 border-4 flex flex-col justify-center items-center w-full md:w-96 h-full py-7 max-h-[800px] ease-in duration-300">
          <StaticImage
            class="object-cover"
            placeholder="blurred"
            src="../images/logo.png"
          />
          <p class="text-white font-bold text-3xl mt-5 pulsate">BIENVENIDO</p>
          <p class="text-white">Aquí nuestro Menú</p>
          <div class="flex justify-center w-full mb-4">
            <div class="h-1 bg-white w-1/2">.</div>
          </div>
          <div class="grid grid-cols-2 mt-4 text-white">
            <div class="m-4 cursor-pointer">
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#brunchs-section')}>Brunch</p>
            </div>
            <div class="m-4">
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#arepas-section')}>Arepas</p>
            </div>
            <div class="m-4">
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#plates-section')}>Platos Fuertes</p>
            </div>
            <div class="m-4">
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#salad-section')}>Ensaladas</p>
            </div>
            <div class="m-4">
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#mexican-section')}>Mexicana</p>
            </div>
            <div class="m-4">
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#bebidas-section')}>Bebidas</p>
            </div>
            <div class="m-4">
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#coffee-section')}>Cafetería y postres</p>
            </div>
            <div class="m-4">
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#wine-section')}>Vinos</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="bg-white h-16 w-full flex justify-center items-center mb-5">
        <p class="text-6xl font-cookie">Busca el equilibrio</p>
      </section> */}
      {/* Brunchs section */}
      <section id="brunchs-section" class="min-h-[60vh]">
        <div class="relative border-4 md:w-1/2 min-h-[60vh] text-white">
          <div class="absolute text-white bg-rose-800/75 z-10 w-3/4 top-10 right-0 px-5 py-4">
            <p class="text-6xl capitalize font-cookie">Brunch</p>
            <p class="text-xl font-semibold underline">{brunchs[0].name}</p>
            <p class="text-lg">{brunchs[0].ingredients}</p>
          </div>
          <div class="absolute bg-white/75 rounded-lg px-5 py-2 bottom-3 left-2 z-10 text-3xl text-pink-700">$ {brunchs[0].price.toFixed(2)}</div>
          <img
            loading="lazy"
            src={brunchs[0].image}
            class="absolute top-0 object-cover h-full w-full"
          />
        </div>
        <div class="bg-rose-800/10 py-5">
          <Carousel
            slides={brunchs.slice(1)}
          />
        </div>
      </section>

      {/* Arepas section */}
      <section id="arepas-section" class="min-h-[60vh] text-center">
        <div class="relative md:w-1/2 mx-auto min-h-[60vh]">
          <div class="absolute z-20 text-white h-48 bg-orange-500/75 px-5 mt-5 py-5">
            <p class="text-6xl font-cookie">Arepas</p>
            <p class="text-xl font-semibold underline">{arepas[0].name}</p>
            <p class="text-lg">{arepas[0].ingredients}</p>
            <p class="text-2xl">${arepas[0].price.toFixed(2)}</p>
          </div>
          <img
            src={arepas[0].image}
            class="absolute top-0 object-cover w-full h-full border"
          />
        </div>
        <div class="min-h-128 grid md:grid-cols-3">
          {arepas.slice(1).map((arepa, index) => (
            <div class="flex flex-col border" key={`arepa-${index}`}>
              <img
                src={arepa.image}
                class="h-64 w-auto object-cover"
              />
              <div class="text-white text-center bg-orange-500/90 h-40 flex flex-col items-center pt-3 px-3">
                <p class="text-2xl underline underline-offset-2 mb-1">{arepa.name}</p>
                <p class="capitalize text-lg">{arepa.ingredients}</p>
                <p class="font-bold mt-2 text-2xl mb-4">$ {arepa.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ensaladas section */}
      <section id="salad-section" class="md:flex flex-col items-center justify-center md:px-7">
        <div class="relative h-96 mb-4 md:h-128 md:w-2/3 border-4">
          <div class="absolute bg-lime-900/75 z-10 h-48 px-4 mt-5 w-3/4 py-2">
            <p class="text-white text-7xl font-cookie">Ensaladas</p>
            <p class="text-white text-base font-semibold">Lechuga, tomate cherry, queso ricota, brotes, pollo, aguacate, maíz amarillo.</p>
          </div>          
          <StaticImage
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute h-full w-full object-cover top-0"
          />
        </div>
        {salads.map((salad, index)=>(
          <div class="md:self-center relative h-72 mt-1 mb-4 border-4 md:h-96 md:w-1/2" key={`salad-${index}`}>
            <div class="absolute w-full flex flex-col bg-green-800/60 z-20 px-4 py-2 text-white">
              <p class="text-white text-2xl font-bold underline underline-offset-2 mb-2">{salad.name}</p>
              <p class="text-white text-base font-semibold">{salad.ingredients}</p>
              <p class="self-end text-2xl">$ {salad.price.toFixed(2)}</p>
            </div>          
            <img
              loading="lazy"
              src={salad.image}
              class="absolute h-full w-full object-cover top-0"
            />
          </div>
        ))}
      </section>
      
      {/* Mexican section */}
      <section id="mexican-section" class="flex flex-col min-h-[50vh]">
        <div class="relative w-full border-4 min-h-64">
          <div class="absolute text-white bg-yellow-500/70 h-32 z-10 mt-5 px-5">
            <p class="text-6xl font-cookie">Mexicana</p>
          </div>
          <StaticImage
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute top-0 w-full h-full object-cover"
          />
        </div>
        <div class="relative grid md:grid-cols-2 text-white">
          {mexicans.map((mexican, index) => (
            <div class="flex flex-col border text-white min-h-64">
              <img
                class="w-full h-full"
                src={mexican.image}
              />
              <div class="flex flex-col items-center bg-yellow-500/70 min-h-32 py-2 px-5">
                <p class="text-center font-semibold text-2xl">{mexican.name}</p>
                <p class="text-center text-lg mb-4">{mexican.ingredients}</p>
                <div class="bg-white text-2xl text-yellow-500 px-4 py-2 mb-4 rounded-full">$ {mexican.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* plates section */}
      <section id="plates-section" class="bg-white/40 flex flex-col items-center min-h-[50vh] text-white">
        <div class="relative w-full md:w-4/6 h-60 bg-white/40">
          <StaticImage
            src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800"
            class="absolute w-full h-full object-cover border-8 border-red-700"
          />
          <div class="absolute bottom-0 inset-x-1/2 -translate-x-1/2 bg-red-700 w-2/3 text-white font-cookie text-6xl text-center">
            Platos fuertes
          </div>
        </div>
        <div class="grid md:grid-cols-2">
        {plates.map((plate, index) => (
          <div class="flex flex-col min-h-72 border">
            <img
              src={plate.image}
              class="h-64 w-auto object-cover"
            />
            <div class="bg-red-700 flex flex-col items-center px-5 pt-4 pb-5 h-full">
              <p class="text-fold text-center text-2xl">{plate.name}</p>
              <div class="bg-white h-1 w-16 mt-2 mb-4"></div>
              <p class="text-xl text-center">{plate.ingredients}</p>
              <p class="text-2xl mt-4 bg-white rounded-full px-3 py-2 text-red-700">$ {plate.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* Bebidas section */}
      <section id="bebidas-section" class="bg-orange-700/25 flex flex-col md:flex-row justify-center gap-5">
        <div class="relative h-80 min-h-96 md:min-h-full md:w-1/2">
          <p class="absolute text-6xl text-white z-20 bg-orange-600/50 w-3/4 py-3 px-4 font-cookie mt-5">Bebidas</p>
          <StaticImage
            src="https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute h-full w-full object-cover"
          />
        </div>
        <div class="text-white py-3 px-4 md:w-1/3">
          <div class="flex justify-between gray-gradient gap-3 px-5 py-2  rounded-full mt-3">
              <p class="text-xl font-medium">Jugos Naturales</p>
              <p class="text-xl">$2.00</p>
          </div>
          <div class="flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3">
              <p class="text-xl font-medium">Batidos</p>
              <p class="text-xl">$2.50</p>
          </div>
          <div class="flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3">
              <p class="text-xl font-medium">Limonadas</p>
              <p class="text-xl">$2.00</p>
          </div>
          <p class="text-lg px-4 my-4">Fresa, Mora, Coco, limonada, imperial, limonada clásica.</p>
          <div class="flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3">
              <p class="text-xl font-medium">Smoothies</p>
              <p class="text-xl">$3.00</p>
          </div>
          <p class="text-lg px-4 my-4">Sin culpa: Manzana verde, apio, perejil, pepino, naranja.</p>
          <p class="text-lg px-4 my-4">Chocolate almendra: Cacao, hielo, almendras, miel.</p>
          <p class="text-lg px-4 my-4">Futos del bosque: Fresa, arandanos, mora, avena, leche descremada.</p>
          
        </div>
      </section>
      
      {/* Coffe section */}
      <section id="coffee-section">
        <div class="relative h-180">
          <div class="absolute inset-x-1/2 -translate-x-1/2 flex justify-center items-center px-3 py-5 w-full md:w-2/3 lg:w-1/3 h-full z-10">
              <div class="border-4 bg-black/70 px-6 py-6 w-full h-full text-white">
                <p class="text-6xl text-center capitalize mb-6 font-cookie">Cafetería y Postres</p>
                {coffees.map((coffee, index) => (
                <div class="flex justify-between mb-2" key={`coffee-${index}`}>
                  <p class="text-xl">{coffee.name}</p>
                  <p class="text-xl">$ {coffee.price.toFixed(2)}</p>
                </div>
                ))}
              </div>
          </div>
          <div class="absolute flex w-full h-full">
            <StaticImage
              src="https://images.pexels.com/photos/333523/pexels-photo-333523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="w-1/2 object-cover h-full"
            />
            <div class="w-1/2 h-full">
              <StaticImage
                class="w-full h-full object-cover"
                src="https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* wine section */}
      <section id="wine-section" class="min-h-[80vh] max-h-[20rem] border-8 border-rose-900">
          <div class="relative">
            <div class="absolute flex justify-center items-center overflow-x-auto py-5 z-10 border-4 h-full w-full bg-rose-900/50">
                <Carousel
                  slides={wines}
                  cardPriceStyle="bg-white text-rose-900 font-bold text-2xl px-4 py-2 -mt-3 mb-4 self-center rounded-full"
                  cardIngredientsStyle="bg-rose-900/80 rounded-full flex flex-col items-center justify-center items-center"
                />
            </div>
            <StaticImage
              src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="w-full min-h-[80vh] object-cover"
            />
          </div>
      </section>

      <section class="bg-white p-4 flex justify-center items-center py-5">
        <StaticImage
          src="../images/sinculpa.jpeg"
          class="object-cover md:w-1/2 h-full"
        />
      </section>
    </Layout>
  )
}

