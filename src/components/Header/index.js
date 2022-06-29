import * as React from "react"


const Header = (props) => {
    const showCollapse = () =>{
        console.log("showing collapse...")
    }

    return (
        <header class="shadow">
            <nav class="relative bg-white/40 min-h-fit">
                {/* <div class="absolute top-0 w-full h-screen bg-amber-600/75 z-50 text-white">
                    <div class="flex flex-col items-center">
                        <p class="text-2xl">Brunchs</p>
                    </div>
                </div> */}
                {/* <button onClick={showCollapse}  class="fixed bottom-28 right-5 z-50 rounded-full w-16 h-16 bg-white shadow"></button> */}
            </nav>
        </header>
    )
} 


export { Header };