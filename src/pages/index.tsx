// Gatsby / React
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// Components
import { Carousel } from '@/components/Carousel';

// API
import { brunchs } from "@/api/brunchs";
import { arepas } from "@/api/arepas";
import { wines } from "@/api/wines";
import { salads } from "@/api/salads";
import { mexicans }from "@/api/mexicans";
import { plates } from "@/api/plates";
import { coffees } from "@/api/coffees";
import { GridFood } from "@/components/GridFood";
import { MenuCard } from "@/components/MenuCard";



export default function IndexPage() {
  return (
    <>
      <section className="w-full min-h-[100vh] bg-stone-600">

      </section>
      <section className="min-h-[90vh] py-6">
        <GridFood
          food={salads}
        />
      </section>
      <section className="min-h-[90vh] py-12 bg-amber-800">
        <div className="grid place-content-center px-5">
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

