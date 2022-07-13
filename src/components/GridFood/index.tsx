import * as React from "react";


const GridFood = ({ food }: GridFoodProps) => {
    return(
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 place-content-center container-lg mx-auto  px-4">
      {food.map((item, index) =>(
        <div className="flex flex-col w-full border-2" key={index}>
          <img
            src={item.image}
            className="w-full h-48 md:h-64 lg:h-72 2xl:h-96 border"
          />
          <div className="text-white bg-green-700/80 pt-3 h-40">
            <p className="text-xl font-bold bg-white text-green-700 w-2/3 px-5 mb-2">{item.name}</p>
            <p className="h-[40%] overflow-y-auto px-5 my-auto">{item.ingredients}</p>
            <p className="bg-white text-green-900 text-end px-5 font-semibold text-xl mt-2">$ {item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
    )
}


export { GridFood };
