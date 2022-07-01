import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { Layout } from "../components/Layout";
import { wines } from "../api/wines";
import scrollTo from 'gatsby-plugin-smoothscroll';


const brunchs = [1, 2, 3, 4, 5];

export default function IndexPage({data}) {
  return (
    <Layout>
      <section class="flex justify-center items-center min-h-[95vh] 2xl:h-[70vh] px-3 py-5">
        <div class="bg-amber-900/30 border-4 flex flex-col justify-center items-center w-full md:w-96 h-full py-7 max-h-[800px]">
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
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#strong-section')}>Platos Fuertes</p>
            </div>
            <div class="m-4">
              <p class="text-xl text-center uppercase" onClick={() => scrollTo('#salad-section')}>Ensaladas</p>
            </div>
            <div class="m-4">
              <p class="text-xl text-center uppercase">Mexicana</p>
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

      {/* Brunchs section */}
      <section id="brunchs-section" class="md:flex min-h-[60vh]">
        <div class="relative border-4 md:w-1/2 min-h-[60vh]">
          <div class="absolute text-white bg-rose-800/75 z-10 w-3/4 top-10 right-0 px-5 py-4">
            <p class="text-6xl capitalize font-cookie">Brunch</p>
            <p class="text-xl font-semibold underline">Pancakes Americano</p>
            <p class="text-lg">4 Pancakes, huevo, tocino, miel, mantequilla, queso mozzarella, jugo de naranja.</p>
          </div>
          <StaticImage
            src="https://images.pexels.com/photos/2105104/pexels-photo-2105104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute top-0 object-cover h-full w-full"
          />
        </div>
        <div class="bg-rose-800/10 flex overflow-x-auto w-full min-h-fit md:w-1/2 py-5">
          {brunchs.map((index) => (
              <div class="snap-center text-white flex flex-col items-center justify-center px-6 my-3" key={index}>
                <StaticImage
                  src="https://images.pexels.com/photos/407041/pancakes-maple-syrup-sweet-407041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  class="h-64 w-64 rounded-full object-cover border-4 border-white"
                />
                <div class="bg-gray-500/50 flex flex-col justify-center items-center text-center h-50 px-4 py-5 mt-4 rounded-md">
                  <p class="text-2xl font-semibold uppercase">Frutos rojos</p>
                  <div class="flex justify-center mt-1 mb-3 w-full">
                    <div class="h-1 bg-white w-12"></div>
                  </div>
                  <p class="text-lg">4 Pancakes, crema pastelera, sinope de fresa, fresas, cereza, arandanos y jugo de naranja.</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Arepas section */}
      <section id="arepas-section" class="md:flex min-h-[60vh]">
        <div class="relative order-last border-4 border-orange-400 md:w-1/2 min-h-[60vh]">
          <div class="absolute z-20 text-white h-48 bg-orange-400/75 px-5 mt-5 py-3">
            <p class="text-6xl font-cookie">Arepas</p>
            <p class="text-xl font-semibold underline">Reina Pepiada</p>
            <p class="text-lg">Pollo, Aguacate, cebolla y perejil.</p>
          </div>
          <StaticImage
            src="../images/bg-arepa.jpeg"
            class="absolute top-0 object-cover w-full h-full"
          />
        </div>
        <div class="h-full md:w-1/2">.</div>
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

        <div class="md:self-start relative h-72 mt-1 mb-4 border-4 md:h-96 md:w-1/2">
          <div class="absolute w-full bg-amber-800/75 z-50 px-4 py-2">
            <p class="text-white text-2xl font-bold underline underline-offset-2 mb-2">Ensalada de Pollo</p>
            <p class="text-white text-base font-semibold">Lechuga, tomate cherry, queso ricota, brotes, pollo, aguacate, maíz amarillo.</p>
          </div>          
          <StaticImage
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute h-full w-full object-cover top-0"
          />
        </div>

        <div class="md:self-end relative h-72 mt-1 mb-4 border-4 md:h-96 md:w-1/2">
          <div class="absolute w-full bg-amber-800/75 z-50 px-4 py-2">
            <p class="text-white text-2xl font-bold underline underline-offset-2 mb-2">Ensalada de Pollo</p>
            <p class="text-white text-base font-semibold">Lechuga, tomate cherry, queso ricota, brotes, pollo, aguacate, maíz amarillo.</p>
          </div>          
          <StaticImage
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute h-full w-full object-cover top-0"
          />
        </div>

        <div class="md:self-start relative h-72 mt-1 mb-4 border-4 md:h-96 md:w-1/2">
          <div class="absolute w-full bg-amber-800/75 z-50 px-4 py-2">
            <p class="text-white text-2xl font-bold underline underline-offset-2 mb-2">Ensalada de Pollo</p>
            <p class="text-white text-base font-semibold">Lechuga, tomate cherry, queso ricota, brotes, pollo, aguacate, maíz amarillo.</p>
          </div>          
          <StaticImage
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute h-full w-full object-cover top-0"
          />
        </div>

        <div class="text-white flex flex-col justify-center items-center md:w-96">
          <StaticImage
            src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="h-64 w-64 rounded-full object-cover border-4 border-gray-500"
          />
          <div class="text-center mt-5 py-5 px-3 bg-amber-400/50 rounded-lg">
            <p class="text-2xl font-bold mb-3">Frutos Hojas Chocolate</p>
            <p class="text-lg">4 Pancackes, crema pastelera, sirope de fresa, fresas, cereza, arandanos y jugos de naranja.</p>
          </div>
        </div>

      </section>

      <section id="strong-section" class="bg-white/40 flex flex-col items-center mt-5 min-h-[50vh]">
        <div class="relative w-full md:w-4/6 h-60 bg-white/40">
          <StaticImage
            src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800"
            class="absolute w-full h-full object-cover border-8 border-red-700"
          />
          <div class="absolute bottom-0 inset-x-1/2 -translate-x-1/2 bg-red-700 w-2/3 text-white font-cookie text-6xl text-center">
            Platos fuertes
          </div>
        </div>
      </section>

      {/* Bebidas section */}
      <section id="bebidas-section" class="bg-orange-700/25 flex flex-col md:flex-row justify-center gap-5">
        <div class="relative h-80 md:h-128 md:w-1/3">
          <p class="absolute text-6xl text-white z-20 bg-orange-600/50 w-3/4 py-3 px-4 font-cookie mt-5">Bebidas</p>
          <StaticImage
            src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
          <div class="absolute inset-x-1/2 -translate-x-1/2 flex justify-center items-center px-3 py-5 w-full md:w-1/3 h-full z-10">
              <div class="border-4 bg-black/60 px-6 py-6 w-full text-white">
                <p class="text-6xl text-center capitalize mb-6 font-cookie">Cafetería y Postres</p>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Café</p>
                  <p class="text-xl">$1.00</p>
                </div>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Café con leche</p>
                  <p class="text-xl">$1.75</p>
                </div>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Cappuccino</p>
                  <p class="text-xl">$2.00</p>
                </div>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Mocaccino</p>
                  <p class="text-xl">$2.00</p>
                </div>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Chocolate</p>
                  <p class="text-xl">$2.00</p>
                </div>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Infusiones</p>
                  <p class="text-xl">$1.00</p>
                </div>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Prensados</p>
                  <p class="text-xl">$2.00</p>
                </div>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Cake frutos secos</p>
                  <p class="text-xl">$2.50</p>
                </div>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Brownie de Avena</p>
                  <p class="text-xl">$1.75</p>
                </div>
                <div class="flex justify-between mb-2">
                  <p class="text-xl">Cheesecake de fresa</p>
                  <p class="text-xl">$2.50</p>
                </div>
                <div class="flex justify-between">
                  <p class="text-xl">Malteada con Culpa</p>
                  <p class="text-xl">$3.00</p>
                </div>
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
      <section id="wine-section" class="h-96">
          <div class="relative border-8 border-rose-900 overflow-hidden">
            <div class="absolute bg-rose-900/50 flex w-full overflow-x-auto py-5 z-20">
                {wines.map((wine, index)=>(
                  <div class="snap-center text-white flex flex-col items-center justify-center px-6 my-3" key={`wine-${index}`}>
                    <div class="h-12 rounded-full flex justify-center items-center w-full text-2xl uppercase font-bold mb-4 text-center">{wine.name}</div>
                    <StaticImage
                      loading="lazy"
                      src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt={`wine-${index}`}
                      class="h-64 w-64 rounded-full object-cover border-4 border-whiter"
                    />
                    <div class="bg-white rounded-full text-rose-700 flex flex-col justify-center items-center w-32 h-12 -mt-5 z-20 text-2xl font-bold">$ {wine.price}</div>
                  </div>
                ))}
            </div>
            <StaticImage
              src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="w-full h-96 object-cover"
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

