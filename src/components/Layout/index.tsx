import * as React from "react"
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = ({ children, dispatch }: LayoutProps) => {
    console.log("Header: ", dispatch)
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export { Layout };
