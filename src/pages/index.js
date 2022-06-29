import * as React from "react";
import { Layout } from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from 'gatsby-plugin-smoothscroll';

const brunchs = [1, 2, 3, 4, 5];

export default function IndexPage() {

  return (
    <Layout>
      <section class="my-2 flex flex-col items-center justify-center pt-3">
        <StaticImage
          class="w-2/3"
          src="../images/logo.png"
        />
        <p class="text-white font-bold text-3xl mt-5">BIENVENIDO</p>
        <p class="text-white">Busca el equilibrio</p>
        <div class="grid grid-cols-2 mt-4 text-white">
          <div class="m-4">
            <p class="text-xl text-center uppercase" onClick={() => scrollTo('#brunchs-section')}>Brunch</p>
          </div>
          <div class="m-4">
            <p class="text-xl text-center uppercase" onClick={() => scrollTo('#arepas-section')}>Arepas</p>
          </div>
          <div class="m-4">
            <p class="text-xl text-center uppercase">Platos Fuertes</p>
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
      </section>

      {/* Brunchs section */}
      <section id="brunchs-section">
        <div class="relative h-96">
          <div class="absolute text-white bg-rose-800/75 z-10 w-3/4 top-10 right-0 px-5 py-4">
            <p class="text-3xl font-bold uppercase">Brunchs</p>
            <p class="text-xl font-semibold underline">Pancakes Americano</p>
            <p class="text-lg">4 Pancakes, huevo, tocino, miel, mantequilla, queso mozzarella, jugo de naranja.</p>
          </div>
          <StaticImage
            src="https://images.pexels.com/photos/2105104/pexels-photo-2105104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute top-0 object-cover w-full h-full"
          />
        </div>
        <div class="bg-red-600/50 flex w-full overflow-x-auto min-h-fit py-5">
          {brunchs.map((items, index) => (
              <div class="snap-center text-white flex flex-col items-center justify-center px-6 my-3">
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
      <section id="arepas-section">
        <div class="relative h-96">
          <div class="absolute z-50 text-white h-32 bg-orange-400/50 px-5 mt-5 py-3">
            <p class="text-3xl font-bold uppercase">Arepas</p>
            <p class="text-xl font-semibold underline">Reina Pepiada</p>
            <p class="text-lg">Pollo, Aguacate, cebolla y perejil.</p>
          </div>
          <StaticImage
            src="../images/bg-arepa.jpeg"
            class="absolute top-0 w-full object-cover h-full"
          />
        </div>
      </section>

      {/* Ensaladas section */}
      <section id="salad-section">
        <div class="relative h-96  mb-4 md:h-96 md:w-1/2">
          <div class="absolute bg-lime-900/75 z-10 h-32 px-4 mt-5 w-3/4 py-2">
            <p class="text-white text-3xl font-bold">Ensaladas</p>
            <p class="text-white text-base font-semibold">Lechuga, tomate cherry, queso ricota, brotes, pollo, aguacate, maíz amarillo.</p>
          </div>          
          <StaticImage
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute h-full w-full object-cover top-0"
          />
        </div>

        <div class="relative h-72  mb-4 border-4 md:h-96 md:w-1/2">
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

      {/* Bebidas section */}
      <section id="bebidas-section" class="bg-orange-700/25 flex flex-col md:flex-row justify-center gap-5">
        <div class="relative h-80 md:w-1/3 md:mt-5">
          <p class="absolute text-3xl text-white font-bold z-50 bg-orange-600/50 w-full py-3 px-4 uppercase">Bebidas</p>
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
          <div class="absolute flex justify-center items-center px-3 py-5 w-full h-full z-10">
              <div class="border-4 bg-black/60 px-6 py-6 w-full text-white">
                <p class="text-2xl text-center font-bold uppercase mb-5">Cafetería y Postres</p>
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
          <StaticImage
            src="https://images.pexels.com/photos/333523/pexels-photo-333523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute w-full object-cover h-full"
          />
        </div>
      </section>

      {/* End */}
      <section id="wine-section">
            <div class="relative h-128">
              <div class="absolute flex justify-center w-full top-10 text-white z-10">
                <div class="bg-red-800/75 text-2xl text-center uppercase p-5 border w-3/4 font-bold">Vinos</div>
              </div>
              <StaticImage
                src="https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="absolute top-0 w-full h-full object-cover"
              />
            </div>
      </section>

      <section class="">
        <StaticImage
          src="../images/sinculpa.jpeg"
        />
      </section>
    </Layout>
  )
}