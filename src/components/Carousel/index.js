import * as React from "react";
import { MdFoodBank } from "react-icons/md";
import { useSwipeable } from "react-swipeable";

const Carousel = ({
    slides = [], 
    maxViewElements=4, 
    cardIngredientsStyle='bg-orange-500/50 text-white mt-5 px-5 h-44 w-full rounded-lg text-justify flex flex-col items-center justify-center border-4',
    cardImageStyle='object-cover rounded-full h-[300px] w-full ease-in duration-300 border-4',
    cardPriceStyle='bg-orange-500/50 border-4 self-end mr-3 text-xl rounded-lg px-5 py-2 mt-2'
    }) => {

    const [current, setCurrent ] = React.useState(0);
    const length = slides.length;
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const slideTo = (index) => {
        setCurrent(index);
    }

    const handlers = useSwipeable({ 
        onSwipedRight: next,
        onSwipedLeft: prev
    })

    const currentElement = slides[current];

    return (
        <div class="carousel w-full flex flex-col justify-center items-center" {...handlers}>
            <div class="realtive flex justify-center w-full max-w-[600px]">
                <div class="w-8 h-fit"></div>
                <div class="flex justify-center overflow-x-auto w-full">
                    <div class="h-full flex grow flex-col text-white">
                        <img
                            loading="lazy"
                            src={currentElement.image}
                            class={cardImageStyle}
                            alt="image"
                        />
                        <div class={cardPriceStyle}>$ {currentElement?.price?.toFixed(2)}</div>
                        <div class={cardIngredientsStyle}>
                            <p class="text-2xl text-center hover:cursor-pointer font-semibold">{currentElement.name}</p>
                            {currentElement.ingredients &&
                            <p class="mt-4">{currentElement.ingredients}</p>
                            }
                        </div>
                    </div>
                </div>
                <div class="w-8"></div>
            </div>
            <div class="indexer flex justify-center w-full gap-4 mt-5">
                {slides.map((element, index)=>(
                    <div class={`rounded-full h-4 w-4 ${current !== index ? 'bg-gray-400/50' : 'bg-white/90'}`} key={`indexer-${index}`} onClick={() => slideTo(index)}></div>
                ))}
            </div>
        </div>
    )
}

export { Carousel };