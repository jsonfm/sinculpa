import * as React from "react"
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useSelector, useDispatch } from 'react-redux';



const Layout = ({ children }: LayoutProps) => {
    const showMenuCollapse = useSelector((state: ApplicationState) => state.headerState.showMenuCollapse);
    console.log("Show menu layout: ", showMenuCollapse);
    return (
        <>
            <Header />
            <main className={`overflow-x-hidden ${showMenuCollapse && 'overflow-y-hidden overscroll-y-none'}`}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export { Layout };
