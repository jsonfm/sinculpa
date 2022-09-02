import * as React from "react";


const GridFood = ({ food }: GridFoodProps) => {
    return(
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 place-content-center container max-w-[1000px] mx-auto px-4">
      {food.map((item, index) => (
        <div className="flex flex-col w-full hover:cursor-pointer hover:scale-105 ease-in duration-300" key={`food-${index}`}>
          <img
            src={item.image}
            className="w-full h-48 md:h-64 xl:h-72 object-cover"
          />
          <div className="text-white bg-white pt-3 h-40">
            <p className="text-xl font-bold bg-brown text-white w-2/3 px-5 mb-2">{item.name}</p>
            <p className="h-[40%] overflow-y-auto px-5 my-auto text-brown">{item.ingredients}</p>
            <p className="bg-brown text-white text-end px-5 font-semibold text-xl mt-2">$ {item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
    )
}


export { GridFood };
