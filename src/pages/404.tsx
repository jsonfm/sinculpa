import * as React from "react"
import { Link } from "gatsby"


// markup
const NotFoundPage = () => {
  return (
    <main className="min-h-screen text-white flex flex-col justify-center items-center">
        <p className="text-3xl">Recurso no encontrado 😔</p>
        <Link className="mt-3 underline underline-offset-2"  to="/">Volver</Link>
    </main>
  )
}

export default NotFoundPage
