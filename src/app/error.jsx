"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b bg-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6">
            {/* Logo */}
            <div className="flex items-center justify-center w-40  h-40 rounded-full dark:bg-transparent mb-6">
                <Image
                    src="/logosinfondo.png"
                    alt="Logo"
                    width={200}
                    height={90}
                    priority
                />
            </div>

            <h1 className="text-6xl font-bold text-primary mb-4 select-none">
                500
            </h1>
            <p className="text-secondary font-extrabold text-6xl select-none underline">
                Ha ocurrido un error en el servidor Contactarse a soporte.
            </p>

            {/* Botones en dos columnas */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <button
                    onClick={() => reset()}
                    className="rounded-2xl bg-primary px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                    Reintentar
                </button>

                <Link
                    href="/"
                    className="rounded-2xl bg-gray-600 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform text-center flex items-center justify-center">
                    Ir al inicio
                </Link>
            </div>
        </div>
    )
}
