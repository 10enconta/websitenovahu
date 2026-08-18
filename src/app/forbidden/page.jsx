"use client"

import Link from "next/link"
import Image from "next/image"

export default function Forbidden() {
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

            <h1 className="text-6xl font-bold text-primary mb-4">403</h1>
            <p className="text-lg text-primary mb-8 select-none">
                No tienes permisos para acceder a esta página
            </p>

            <Link
                href="/"
                className="rounded-2xl bg-primary px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                Volver al inicio
            </Link>
        </div>
    )
}
