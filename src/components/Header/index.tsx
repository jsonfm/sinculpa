// React
import * as React from "react"
// Icons
import { RiInstagramFill, RiFacebookCircleFill } from "react-icons/ri";

// Gatsby Plugins
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StaticImage} from "gatsby-plugin-image";

// Context
// import { Ctx } from "@/store/context";
import { useSelector, connect } from 'react-redux';


const Header = ({ dispatch }) => {
    // console.log("dispatch: ", dispatch)
    const [animation, setAnimation] = React.useState('collapse-close');
    // const [ showMenuCollapse, setMenuCollapse] = React.useState(false) ;
    const showMenuCollapse = useSelector((state) => state.header.showMenuCollapse);
    console.log("showMenuCollapse: ", showMenuCollapse)

    const sleep = async (delay: number) => {
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
        dispatch({ type: "TOGGLE_HEADER_MENU_COLLAPSE", payload: !showMenuCollapse });
    }

    const scrollFromTo = async (id:string)=> {
        const delay = 300;
        setAnimation("collapse-close");
        await sleep(delay);
        // dispatch({ type: "TOGGLE_HEADER_MENU_COLLAPSE", payload: false });
        scrollTo(id);
    }

    return (
        <header className="shadow overflow-hidden overscroll-y-none">
            <nav className="relative bg-white/40 min-h-fit">
                { showMenuCollapse &&
                <div className={`fixed top-0 w-full h-screen z-50 text-white overflow-hidden bg-amber-700/80 ${animation}`}>
                    <div className="relative top-0 flex-col items-center h-full">
                        <div className="h-full border-4 text-white flex flex-col items-center">
                            <p className="font-cookie text-6xl mt-6">Menú</p>
                            <div className="mt-5">
                                <div className="grid grid-cols-2 mt-4 text-white">
                                    <div className="m-4 cursor-pointer">
                                    <p className="text-xl text-center uppercase" onClick={async () => scrollFromTo('#brunchs-section')}>Brunch</p>
                                    </div>
                                    <div className="m-4">
                                    <p className="text-xl text-center uppercase" onClick={async () => scrollFromTo('#arepas-section')}>Arepas</p>
                                    </div>
                                    <div className="m-4">
                                    <p className="text-xl text-center uppercase" onClick={async () => scrollFromTo('#plates-section')}>Platos Fuertes</p>
                                    </div>
                                    <div className="m-4">
                                    <p className="text-xl text-center uppercase" onClick={async () => scrollFromTo('#salad-section')}>Ensaladas</p>
                                    </div>
                                    <div className="m-4">
                                    <p className="text-xl text-center uppercase" onClick={async () => scrollFromTo('#mexican-section')}>Mexicana</p>
                                    </div>
                                    <div className="m-4">
                                    <p className="text-xl text-center uppercase" onClick={async () => scrollFromTo('#bebidas-section')}>Bebidas</p>
                                    </div>
                                    <div className="m-4">
                                    <p className="text-xl text-center uppercase" onClick={async () => scrollFromTo('#coffee-section')}>Cafetería y postres</p>
                                    </div>
                                    <div className="m-4">
                                    <p className="text-xl text-center uppercase" onClick={async () => scrollFromTo('#wine-section')}>Vinos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }

                <div className="flex flex-col text-white items-center gap-5 fixed bottom-28 right-5 z-50">
                  <div className="text-4xl">
                    <a href="https://www.instagram.com/sinculpaloja/" target="_blank" rel="noreferrer" className="ease-in duration-300">
                        <RiInstagramFill/>
                    </a>
                  </div>
                  <button onClick={openCollapse}  className={` rounded-full w-16 h-16 drop-shadow-2xl ease-in duration-300`}>
                      <StaticImage
                          alt="logo"
                          src="../../images/spiralwhite.png"
                          className="w-full h-full animate-spin-slow"
                      />
                  </button>
                </div>
            </nav>
        </header>
    )
}

const header = connect()(Header)

export { header as Header };
