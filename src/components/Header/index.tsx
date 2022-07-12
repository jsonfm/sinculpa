import * as React from "react"
import { RiInstagramFill, RiFacebookCircleFill } from "react-icons/ri";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage} from "gatsby-plugin-image";

const Header = (props) => {
    const [animation, setAnimation] = React.useState('collapse-close');
    const [displayCollapse, setDisplayCollapse] = React.useState(false);

    const sleep = async (delay) => {
        return await new Promise(r => setTimeout(r, delay));
    }

    const openCollapse = async() =>{
        const delay = 300;
        if(animation == "collapse-close"){
            setAnimation("collapse-open");
        }else{
            setAnimation("collapse-close");
        }
        await sleep(delay);
        setDisplayCollapse(!displayCollapse);
    }

    const scrollFromTo = async (id)=> {
        const delay = 300;
        setAnimation("collapse-close");
        await sleep(delay);
        setDisplayCollapse(false);
        scrollTo(id);
    }

    return (
        <header class="shadow overflow-hidden overscroll-y-none">
            <nav class="relative bg-white/40 min-h-fit">
                { displayCollapse &&
                <div class={`fixed top-0 w-full h-screen bg-amber-600/80 z-50 text-white overflow-hidden ${animation}`}>
                    <div class="relative flex-col items-center h-full">
                        <div class="h-full border-4 text-white flex flex-col items-center">
                            <p class="font-cookie text-6xl mt-6">Menú</p>
                            <div class="mt-5">
                                <div class="grid grid-cols-2 mt-4 text-white">
                                    <div class="m-4 cursor-pointer">
                                    <p class="text-xl text-center uppercase" onClick={async () => scrollFromTo('#brunchs-section')}>Brunch</p>
                                    </div>
                                    <div class="m-4">
                                    <p class="text-xl text-center uppercase" onClick={async () => scrollFromTo('#arepas-section')}>Arepas</p>
                                    </div>
                                    <div class="m-4">
                                    <p class="text-xl text-center uppercase" onClick={async () => scrollFromTo('#plates-section')}>Platos Fuertes</p>
                                    </div>
                                    <div class="m-4">
                                    <p class="text-xl text-center uppercase" onClick={async () => scrollFromTo('#salad-section')}>Ensaladas</p>
                                    </div>
                                    <div class="m-4">
                                    <p class="text-xl text-center uppercase" onClick={async () => scrollFromTo('#mexican-section')}>Mexicana</p>
                                    </div>
                                    <div class="m-4">
                                    <p class="text-xl text-center uppercase" onClick={async () => scrollFromTo('#bebidas-section')}>Bebidas</p>
                                    </div>
                                    <div class="m-4">
                                    <p class="text-xl text-center uppercase" onClick={async () => scrollFromTo('#coffee-section')}>Cafetería y postres</p>
                                    </div>
                                    <div class="m-4">
                                    <p class="text-xl text-center uppercase" onClick={async () => scrollFromTo('#wine-section')}>Vinos</p>
                                    </div>
                                </div>                            
                            </div>
                            <div class="text-white text-5xl flex gap-4 mt-auto mb-5 h-16 ">
                                <a href="https://www.instagram.com/sinculpaloja/" target="_blank" rel="noreferrer" class="ease-in duration-300">
                                    <RiInstagramFill/>
                                </a>
                                <a href="https://www.facebook.com/sinculpaloja" target="_blank" rel="noreferrer" class="ease-in duration-300" >
                                    <RiFacebookCircleFill/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                }
                <button onClick={openCollapse}  class={`fixed bottom-28 right-5 z-50 rounded-full w-16 h-16 drop-shadow-2xl ease-in duration-300 ${!displayCollapse && 'bg-orange-700/50'}`}>
                    <StaticImage
                        src="../../images/spiralwhite.png"
                        class="w-full h-full animate-spin-slow"
                    />
                </button>
            </nav>
        </header>
    )
} 


export { Header };