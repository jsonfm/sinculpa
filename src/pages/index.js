import * as React from "react";
import { Layout } from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout>
      <section class="px-5">
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

      <section class="mt-5 bg-orange-700/25 flex flex-col md:flex-row justify-center gap-5">
        <div class="relative h-80 md:w-1/3 md:mt-5">
          <p class="absolute text-3xl text-white font-bold z-50 bg-orange-600/50 w-full py-3 px-4 uppercase">Bebidas</p>
          <StaticImage
            src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            class="absolute h-full w-full object-cover"
          />
        </div>
        <div class="text-white py-3 px-4 md:w-1/3">
          <div class="flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3">
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

      <section class="">
        <StaticImage
          src="../images/sinculpa.jpeg"
        />
      </section>
    </Layout>
  )
}