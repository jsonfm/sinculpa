import * as React from "react";
import { MdFoodBank } from "react-icons/md";
import { useSwipeable } from "react-swipeable";


const Carousel = ({
    slides = [],
    maxViewElements=4,
    cardIngredientsStyle='bg-orange-500/50 text-white mt-5 px-5 h-44 w-full rounded-lg text-justify flex flex-col items-center justify-center border-4',
    cardImageStyle='object-cover rounded-full h-[300px] w-[300px] ease-in duration-300 border-4',
    cardPriceStyle='bg-orange-500/50 border-4 self-end mr-3 text-xl rounded-lg px-5 py-2 mt-2'
    }: CarouselProps) => {

    const [current, setCurrent ] = React.useState(0);
    const length = slides.length;
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const slideTo = (index:number) => {
        setCurrent(index);
    }

    const handlers = useSwipeable({
        onSwipedRight: next,
        onSwipedLeft: prev
    })

    const currentElement = slides[current];

    return (
        <div className="carousel w-full flex flex-col justify-center items-center" {...handlers}>
            <div className="realtive flex justify-center w-full max-w-[600px]">
                <div className="w-8 h-fit"></div>
                <div className="flex justify-center overflow-x-auto w-full">
                    <div className="h-full flex grow flex-col text-white">
                        <img
                            loading="lazy"
                            src={currentElement.image}
                            className={cardImageStyle}
                            alt="image"
                        />
                        <div className={cardPriceStyle}>$ {currentElement?.price?.toFixed(2)}</div>
                        <div className={cardIngredientsStyle}>
                            <p className="text-2xl text-center hover:cursor-pointer font-semibold">{currentElement.name}</p>
                            {currentElement.ingredients &&
                            <p className="mt-4">{currentElement.ingredients}</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="w-8"></div>
            </div>
            <div className="indexer flex justify-center w-full gap-4 mt-5">
                {slides.map((element, index)=>(
                    <div className={`rounded-full h-4 w-4 ${current !== index ? 'bg-gray-400/50' : 'bg-white/90'}`} key={`indexer-${index}`} onClick={() => slideTo(index)}></div>
                ))}
            </div>
        </div>
    )
}

export { Carousel };
