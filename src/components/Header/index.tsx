// React
import * as React from "react";

// Icons
import { RiInstagramFill } from "react-icons/ri";

// Gatsby Plugins
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage} from "gatsby-plugin-image";

// Context
import { Dispatch} from "redux";
import { useSelector, useDispatch } from 'react-redux';

// Styles
import "./styles.css";
import { FlowersDivider } from "../svgs/FlowersDivider";


const Header = () => {
    const [showCollapseButtons, setShowCollapseButtons] = React.useState(false);
    const [animation, setAnimation] = React.useState('collapse-close');
    const showMenuCollapse = useSelector((state: ApplicationState) => state.headerState.showMenuCollapse);
    const dispatch: Dispatch<HeaderAction> = useDispatch();

    const sleep = async (delay: number = 300) => {
        return await new Promise(r => setTimeout(r, delay));
    }

    const openCollapse = async() => {
        if(animation == "collapse-close"){
            setAnimation("collapse-open");
            await sleep(200);
        }else{
            setAnimation("collapse-close");
            await sleep(100);
        }

        dispatch({ type: "@header/ToggleHeaderMenuCollapse", payload: !showMenuCollapse });
    }

    const scrollFromTo = async (id:string) => {
        setAnimation("collapse-close");
        await sleep(100);
        dispatch({ type: "@header/ToggleHeaderMenuCollapse", payload: false });
        scrollTo(id);
    }

    const scrolling = async() => {
      if (window.pageYOffset > 200){
        setShowCollapseButtons(true);
      }else{
        setShowCollapseButtons(false);
        setAnimation("collapse-close");
        await sleep(100);
        dispatch({ type: "@header/ToggleHeaderMenuCollapse", payload: false });
      }

    }

    React.useEffect(()=>{
      window.addEventListener("scroll", scrolling);
    })

    return (
        <header className="shadow overflow-hidden overscroll-y-none">
            <nav className="relative bg-white min-h-fit">
                { showMenuCollapse &&
                <div className={`fixed top-0 w-full h-screen text-white overflow-hidden overscroll-none z-50`}>
                    <div className={`${animation} relative top-0 flex-col items-center h-full z-30`}>
                        <div className="h-full border-4 text-white flex flex-col items-center">
                            <p className="font-cookie text-6xl mt-6 underline underline-offset-2">Menú</p>
                            <FlowersDivider className="text-white"/>
                            <div className="mt-5">
                                <div className="grid grid-cols-2 mt-4 gap-y-6 text-white font-cookie text-3xl text-center px-4">
                                  <p onClick={async () => scrollFromTo('#snacks-section')} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">A toda hora</p>
                                  <p onClick={async () => scrollFromTo('#fast-options')} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Opciones Rápidas</p>
                                  <p onClick={async () => scrollFromTo('#arepas-section')} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Arepas</p>
                                  <p onClick={async () => scrollFromTo('#salads-section')} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Ensaladas</p>
                                  <p onClick={async () => scrollFromTo('#fruits-section')} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Ensaladas de frutas</p>
                                  <p onClick={async () => scrollFromTo('#cocktails-section')} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Cócteles</p>
                                  <p onClick={async () => scrollFromTo('#dinners-section')} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Meriendas</p>
                                  <p onClick={async () => scrollFromTo('#juices-section')} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Jugos y batidos</p>
                                  <p onClick={async () => scrollFromTo('#hotdrinks-section')} className="hover:cursor-pointer focus:scale-110 hover:scale-125 ease-in duration-300">Bebidas calientes y postres</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                <div className={`${showMenuCollapse ? 'propagation-increase bg-amber-900/80 z-20' : 'bg-amber-900/10 propagation-decrease'} ${!showCollapseButtons && 'hidden'} fixed bottom-28 right-5 rounded-full w-16 h-16`}></div>

                <div className={`${!showCollapseButtons && 'hidden'} flex flex-col text-white items-center gap-5 fixed bottom-28 right-5 z-50 jump-animation`}>
                  <div className="text-4xl">
                    <a href="https://www.instagram.com/sinculpaloja/" target="_blank" rel="noreferrer" className="ease-in duration-300">
                        <RiInstagramFill/>
                    </a>
                  </div>
                  <button onClick={openCollapse}  className={`rounded-full w-16 h-16 drop-shadow-2xl ease-in duration-300 bg-transparent`}>
                      <StaticImage
                          alt="logo"
                          src="../../images/spiralwhite.png"
                          className="w-full h-full animate-spin-slow bg-transparent"
                          placeholder="blurred"
                      />
                  </button>
                </div>
            </nav>
        </header>
    )
}

export { Header };
