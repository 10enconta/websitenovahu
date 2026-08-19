"use client"

import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faToiletPaper,
    faCartShopping,
    faPhone,
    faBars,
} from "@fortawesome/free-solid-svg-icons"
import { useCart } from "./cart-context"

const enlaces = [
    { label: "Inicio", href: "#inicio" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Ventajas", href: "#ventajas" },
    { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
    // const { totalItems, setIsOpen } = useCart()
    const {
        items,
        totalItems,
        totalPrecio,
        isOpen,
        setIsOpen,
        updateQty,
        removeItem,
        clear,
    } = useCart()

    console.log("CartDrawer isOpen:", isOpen)
    return (
        <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/90 backdrop-blur text-black">
            <div className="navbar mx-auto max-w-6xl px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            aria-label="Menú">
                            <FontAwesomeIcon
                                icon={faBars}
                                className="text-lg"
                            />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content menu-sm z-50 mt-3 w-52 gap-1 rounded-box bg-base-100 p-2 shadow-lg">
                            {enlaces.map((e) => (
                                <li key={e.href}>
                                    <a href={e.href}>{e.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a
                        href="#inicio"
                        className="flex items-center gap-2 px-2 text-primary">
                        <div className="size-auto overflow-hidden hidden md:block rounded-full bg-white">
                            <Image
                                src="/logoblanco.png"
                                alt="NOVAHU"
                                width={52}
                                height={52}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <span className="text-xl font-extrabold tracking-tight text-base-content">
                            NOVAHU
                        </span>
                    </a>
                </div>

                <nav className="navbar-center hidden lg:flex select-none">
                    <ul className="menu menu-horizontal gap-1 px-1 font-semibold">
                        {enlaces.map((e) => (
                            <li key={e.href}>
                                <a href={e.href}>{e.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="navbar-end gap-2">
                    <a
                        href="#contacto"
                        className="btn btn-ghost btn-sm md:btn-base hidden sm:inline-flex">
                        <FontAwesomeIcon icon={faPhone} />
                        Cotizar
                    </a>
                    <button
                        type="button"
                        onClick={() => {
                            console.log("ABRIENDO CARRITO")
                            setIsOpen(true)
                        }}
                        className="btn btn-primary btn-sm md:btn-base cursor-pointer touch-manipulation select-none"
                        aria-label="Abrir carrito">
                        <div className="indicator">
                            {totalItems > 0 && (
                                <span className="badge indicator-item badge-xs badge-accent">
                                    {totalItems}
                                </span>
                            )}

                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>

                        <span className="hidden sm:inline">Carrito</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
